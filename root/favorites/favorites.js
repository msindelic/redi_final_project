// FAVORITES PAGE - SCRIPT

// This file handles displaying and managing favorite movies
// Data is stored in browser's localStorage

// DOM ELEMENTS
const favoritesContainer = document.getElementById("favoritesContainer");

// CORE FUNCTIONS
/* Loads and displays all favorite movies from localStorage */
/* Creates movie cards for each favorite or shows empty state */

function loadFavorites() {
  // Retrieve favorites from localStorage (or empty array if none exist)
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Clear existing content
  favoritesContainer.innerHTML = "";
  // Handle empty favorites state
  if (favorites.length === 0) {
    favoritesContainer.classList.remove("favoritesContainer");
    favoritesContainer.classList.add("empty-message");
    favoritesContainer.innerHTML = `<p>You haven't added any favorites yet 🎥</p>`;
    return;
  }
  // Generate movie cards for each favorite
  favorites.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    // Build card HTML with remove button and movie info
    card.innerHTML = `
      <button class="remove-btn" onclick="removeFavorite('${
        movie.imdbID
      }')">×</button>
      <img src="${
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/220x320" // Fallback image if no poster
      }" alt="${movie.Title}">
      <h2>${movie.Title}</h2>
      <p>${movie.Year}</p>
    `;
    // Add card to container
    favoritesContainer.appendChild(card);
  });
}
// Removes a movie from favorites list
function removeFavorite(id) {
  // Get current favorites from localStorage
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  // Filter out the movie with matching ID
  favorites = favorites.filter((movie) => movie.imdbID !== id);
  // Save updated favorites back to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
  // Reload the favorites display
  loadFavorites();
}

// INITIALIZATION
// Load favorites when page loads

loadFavorites();
