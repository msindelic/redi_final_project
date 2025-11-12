# Movie Explorer

A modern, responsive web application for searching and exploring movies using the OMDb API. Built with pure vanilla JavaScript, HTML, and CSS - no frameworks required.

## Features

- **Movie Search** - Search for movies by title using the OMDb API
- **Detailed Movie Information** - View complete movie details including plot, cast, director, ratings, and more
- **Favorites System** - Save your favorite movies locally using browser's localStorage
- **Responsive Design** - Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modal View** - Click any movie card to see detailed information in a beautiful modal window
- **Real-time Favorites Count** - Track how many movies you've saved to favorites
- **Clean UI** - Modern dark theme with green accents and smooth animations

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling with flexbox, grid, animations, and media queries
- **Vanilla JavaScript** - Pure JavaScript with no frameworks or libraries
- **OMDb API** - Open Movie Database API for movie data
- **localStorage API** - Browser storage for persisting favorites

## Project Structure

\`\`\`
project/
├── public/
│ ├── index.html # Main HTML file
│ ├── styles.css # Core CSS styles
│ ├── responsive.css # Media queries for responsive design
│ ├── script.js # Main JavaScript logic
│ ├── api.js # OMDb API integration functions
│ ├── presentation.html # Technical presentation slides
│ └── school-presentation.html # School presentation slides
├── README.md # Project documentation
\`\`\`

## File Descriptions

### HTML Files

- **index.html** - Main application page with search bar, movie grid, modal, and favorites section
- **presentation.html** - Technical project presentation
- **school-presentation.html** - Comprehensive school presentation covering project details

### CSS Files

- **styles.css** - Core styling including layout, colors, typography, and animations
- **responsive.css** - Media queries for mobile (480px), tablet (768px), and desktop (1024px) breakpoints

### JavaScript Files

- **api.js** - API module containing three functions:
  - `searchMovies(query)` - Search movies by title
  - `getMovieDetails(imdbID)` - Get full movie details
  - `getMovieBasicInfo(imdbID)` - Get basic movie info for favorites
- **script.js** - Main application logic:
  - Search functionality with Enter key support
  - Movie display and card rendering
  - Modal window for detailed views
  - Favorites management with localStorage
  - Event handlers and UI updates

## Setup Instructions

### 1. Get OMDb API Key

1. Visit [OMDb API](https://www.omdbapi.com/apikey.aspx)
2. Sign up for a free API key
3. Check your email to activate the key

### 2. Configure API Key

Open `public/api.js` and replace `YOUR_API_KEY` with your actual API key:

\`\`\`javascript
const API_KEY = "your_actual_api_key_here"
\`\`\`

### 3. Run the Application

You have several options to run the application:

**Option 1: Direct File Opening**

- Simply open `public/index.html` in your web browser

**Option 2: Local Web Server (Recommended)**

- Using Python:
  \`\`\`bash
  cd public
  python -m http.server 8000
  \`\`\`
  Then visit `http://localhost:8000`

- Using Node.js (with http-server):
  \`\`\`bash
  npx http-server public -p 8000
  \`\`\`
  Then visit `http://localhost:8000`

- Using VS Code Live Server extension:
  - Install "Live Server" extension
  - Right-click on `index.html` and select "Open with Live Server"

## How to Use

### Search for Movies

1. Enter a movie title in the green search bar (e.g., "The Matrix", "Inception")
2. Click the "Search" button or press Enter
3. Browse the movie results displayed as cards

### View Movie Details

1. Click on any movie card
2. A modal window will appear with full details:
   - Movie poster
   - Plot summary
   - Genre, Director, Cast
   - IMDb rating
   - Runtime and release year

### Manage Favorites

1. **Add to Favorites**: Click the heart icon on any movie card or in the modal
2. **View Favorites**: Click the "My Favorites" button in the header
3. **Remove from Favorites**: Click the red heart icon on favorited movies
4. **Favorites Count**: See the number badge next to "My Favorites" button

### Keyboard Shortcuts

- **Enter** - Submit search query
- **Escape** - Close modal window

## Responsive Breakpoints

The application is fully responsive with three main breakpoints:

- **Desktop**: 1024px and above - Full layout with larger cards
- **Tablet**: 768px to 1023px - 2-column grid layout
- **Mobile**: 480px to 767px - Single column layout
- **Small Mobile**: Below 480px - Optimized for small screens

## Features in Detail

### Search Functionality

- Real-time search with loading indicator
- Error handling for failed requests
- "No results" messaging
- Enter key support for quick searching

### Movie Cards

- High-quality poster images with fallback
- Movie title, year, and type
- Favorite toggle button
- Hover effects and animations

### Modal Window

- Detailed movie information
- Scrollable content for long descriptions
- Close button and overlay click to dismiss
- ESC key support
- Responsive design

### Favorites System

- localStorage persistence
- Survives page refreshes
- Real-time count updates
- Dedicated favorites view
- Add/remove functionality

### UI/UX

- Loading spinners during API calls
- Error messages for user feedback
- Smooth transitions and animations
- Intuitive navigation
- Accessibility considerations

## API Information

This project uses the [OMDb API](https://www.omdbapi.com/) (Open Movie Database).

**API Endpoints Used:**

- Search: `https://www.omdbapi.com/?apikey={key}&s={query}`
- Details: `https://www.omdbapi.com/?apikey={key}&i={imdbID}&plot=full`
- Basic Info: `https://www.omdbapi.com/?apikey={key}&i={imdbID}`

**Rate Limits:**

- Free tier: 1,000 requests per day
- Consider implementing request caching for production use

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

**Required Browser Features:**

- ES6 JavaScript support
- Fetch API
- localStorage API
- CSS Grid and Flexbox
- CSS Custom Properties

## Future Enhancements

- **Search Filters** - Filter by year, genre, type (movie/series)
- **Advanced Search** - Search by director, actor, or keyword
- **Sorting Options** - Sort results by rating, year, or title
- **Pagination** - Handle large result sets with page navigation
- **Movie Trailers** - Embed YouTube trailers in the modal
- **User Reviews** - Add personal ratings and notes
- **Export Favorites** - Download favorites list as JSON/CSV
- **Dark/Light Theme** - Toggle between color themes
- **Sharing** - Share favorite movies on social media
- **PWA Support** - Install as progressive web app
- **Backend Integration** - User accounts and cloud sync
- **Recommendations** - Suggest similar movies

## Known Limitations

- Free API tier limited to 1,000 requests per day
- Some older movies may have incomplete data
- Poster images may not be available for all movies
- API response time depends on network connection

## Troubleshooting

**Movies not loading?**

- Check that your API key is correctly configured in `api.js`
- Verify your API key is activated (check email)
- Ensure you haven't exceeded daily API limit
- Check browser console for error messages

**Favorites not saving?**

- Ensure localStorage is enabled in your browser
- Check if you're in private/incognito mode (localStorage may be restricted)
- Clear browser cache and try again

**Styling issues?**

- Make sure both `styles.css` and `responsive.css` are loaded
- Check browser console for CSS file errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Development

### Making Changes

**Modifying Styles:**

- Core styles: Edit `public/styles.css`
- Responsive styles: Edit `public/responsive.css`

**Adding Features:**

- UI logic: Edit `public/script.js`
- API functions: Edit `public/api.js`

**Testing:**

- Test on multiple screen sizes using browser dev tools
- Test with slow network to see loading states
- Test with no results and error scenarios

## License

This project is open source and available for educational purposes.

## Credits

- **OMDb API** - Movie data provided by [OMDb API](https://www.omdbapi.com/)
- **Developer** - Created as a school project demonstrating vanilla JavaScript skills

## Contact

For questions or feedback about this project, please open an issue on the repository.

---

**Built with vanilla JavaScript, HTML, and CSS - no frameworks needed!**
