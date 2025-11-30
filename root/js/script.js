// API Configuration
const API_KEY = "";

// DOM ELEMENTS
const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const movieContainer = document.getElementById("movieContainer");
const modal = document.getElementById("movieModal");
const modalDetails = document.getElementById("modalDetails");
const modalPoster = document.getElementById("modalPoster");
const closeModal = document.getElementById("closeModal");
const prevPageBtn = document.getElementById("prevPage");
const nextPageBtn = document.getElementById("nextPage");
const pageInfo = document.getElementById("pageInfo");
const pagination = document.querySelector(".pagination");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// STATE MANAGMENT
let currentPage = 1; // Track current page number for pagination
let currentQuery = ""; // Store the current search query

// Hide pagination controls initially (shown after search)
pagination.style.display = "none";

// EVENT LISTENER

// Search button click handler
searchBtn.addEventListener("click", () => {
  currentPage = 1; // Reset to first page on new search
  fetchMovies();
});

// Enter key press handler for search input
movieInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    currentPage = 1; // Reset to first page on new search
    fetchMovies();
  }
});

// Close modal when X is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Previous page button handler
prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchMovies();
    scrollToTop(); // Scroll to top after page change
  }
});

// Next page button handler
nextPageBtn.addEventListener("click", () => {
  currentPage++;
  fetchMovies();
  scrollToTop(); // Scroll to top after page change
});

// Show/hide scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Scroll to top button click handler
scrollTopBtn.addEventListener("click", () => {
  scrollToTop();
});

// UTILITY FUNCTIONS

// Smoothly scrolls the page to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// CORE FUNCTIONS

// Fetches movies from OMDB API based on search query and current page
// Updates the UI with search results and pagination controls

async function fetchMovies() {
  currentQuery = movieInput.value.trim();
  // Validate input
  if (!currentQuery) {
    movieContainer.innerHTML = "<p>Please enter a movie name.</p>";
    pagination.style.display = "none";
    return;
  }
  // Show loading state
  movieContainer.innerHTML = "<p>Loading ...</p>";

  try {
    // Fetch movies from OMDB API with search query and page number
    const res = await fetch(
      `https://www.omdbapi.com/?s=${currentQuery}&page=${currentPage}&apikey=${API_KEY}`
    );
    const data = await res.json();
    // Handle API errors (e.g., "Movie not found!")
    if (data.Response === "False") {
      movieContainer.innerHTML = `<p>${data.Error}</p>`;
      pagination.style.display = "none";
      return;
    }
    // Generate movie cards from search results
    movieContainer.innerHTML = data.Search.map(
      (movie) => `
      <div class="movie-card" onclick="showDetails('${movie.imdbID}')">
        <img src="${
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/250x350" // Fallback image if no poster
        }" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <p>${movie.Year}</p>
      </div>
    `
    ).join("");

    // Show and update pagination controls
    pagination.style.display = "flex";
    pageInfo.textContent = `Page ${currentPage}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = data.Search.length < 10;
  } catch (error) {
    // Handle network or other errors
    movieContainer.innerHTML =
      "<p>Something went wrong. Please try again later.</p>";
    pagination.style.display = "none";
  }
}
// Fetches detailed information for a specific movie and displays in modal
async function showDetails(id) {
  try {
    // Fetch full movie details by IMDB ID
    const res = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    const movie = await res.json();
    // Set modal poster image (with fallback)
    modalPoster.src =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/250x350";
    // Populate modal with movie details
    modalDetails.innerHTML = `
      <h2>${movie.Title} (${movie.Year})</h2>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Actors:</strong> ${movie.Actors}</p>
      <p><strong>IMDB Rating:</strong> ⭐ ${movie.imdbRating}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <button onclick="addToFavorites('${movie.imdbID}', '${movie.Title}', '${movie.Poster}', '${movie.Year}')">❤️ Add to Favorites</button>
    `;
    // Display the modal
    modal.style.display = "flex";
  } catch (error) {
    console.error(error);
  }
}

function addToFavorites(id, title, poster, year) {
  // Retrieve existing favorites from localStorage (or empty array)
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  // Check if movie is already in favorites
  if (!favorites.find((movie) => movie.imdbID === id)) {
    // Add movie to favorites array
    favorites.push({ imdbID: id, Title: title, Poster: poster, Year: year });
    // Save updated favorites to localStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${title} add to favorites!`);
  } else {
    alert("Already in favorites!");
  }
}
