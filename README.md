# Movie Search App

## Project description

Movie Search App is a small web application that lets users search for movies using the OMDb API, view details in a modal, paginate through results, and save favorite movies to localStorage. The UI is responsive and designed for quick lookups and lightweight browsing.

## Features list

* Search movies by title (powered by the OMDb API).
* Keyboard support: press Enter to search.
* Paginated results with Previous / Next controls.
* Responsive grid layout for movie cards.
* Movie detail modal with poster, genre, director, actors, rating, and plot.
* Add movies to Favorites (stored in `localStorage`).
* Scroll-to-top button.

---

## Technologies used

* HTML5
* CSS3 (Google Font: Poppins)
* Vanilla JavaScript (ES6)
* OMDb API ([https://www.omdbapi.com/](https://www.omdbapi.com/))

---

## Setup / Installation instructions

1. Install Visual Studio Code from here https://code.visualstudio.com/.
2. Open Visual Studio Code and Install the Live Server extension from the Extensions tab.
3. Clone this repository to your local machine using the command:
git clone https://github.com/msindelic/redi_final_project
4. Open the cloned folder in Visual Studio Code
5. Right-click on the index.html file and select "Open with Live Server".
6. If you don't have Live Server Installed, just go to the extentions tab on the left side, look for it and Install
7. Your default web browser will open and display the website.
8. And that's it! You have successfully created and run The Movie Search App!!
9. Replace the API key in `js/script.js` with your own OMDb API key:

```js
const API_KEY = 'YOUR_OMDB_API_KEY';
```

---

## Usage guide

1. Type a movie title into the search box and click **Search** or press **Enter**.
2. Browse results in the grid. Click a movie card to open the details modal.
3. Inside the modal, click **Add to Favorites** to save a movie to your browser's `localStorage`.
4. Use the **Previous** and **Next** buttons to paginate through results. Each page shows up to 10 results from OMDb.
5. Use the **⬆️** button to quickly scroll back to the top of the page.


