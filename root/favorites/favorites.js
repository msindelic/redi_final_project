// DOM Elements
const favoritesContainer = document.getElementById("favoritesContainer");

// Load favorites from localStorage
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Save favorites to localStorage
function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Remove from favorites
function removeFromFavorites(imdbID) {
  let favorites = getFavorites();
  favorites = favorites.filter((fav) => fav.imdbID !== imdbID);
  saveFavorites(favorites);
  displayFavorites();
}

// Display favorites
function displayFavorites() {
  const favorites = getFavorites();

  if (favorites.length === 0) {
    favoritesContainer.innerHTML = `
      <div class="empty-message">
        <p>No favorite movies yet. Start adding some from the search page!</p>
      </div>
    `;
    return;
  }

  favoritesContainer.innerHTML = "";

  favorites.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";

    const poster =
      movie.Poster !== "N/A"
        ? movie.Poster
        : "https://via.placeholder.com/220x330?text=No+Poster";

    movieCard.innerHTML = `
      <button class="remove-btn" data-id="${movie.imdbID}" title="Remove from favorites">
        ×
      </button>
      <img src="${poster}" alt="${movie.Title}" />
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
    `;

    // Remove button event
    const removeBtn = movieCard.querySelector(".remove-btn");
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeFromFavorites(movie.imdbID);
    });

    favoritesContainer.appendChild(movieCard);
  });
}

// Initialize
displayFavorites();
