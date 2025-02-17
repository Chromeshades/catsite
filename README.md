# Cat Web App

This project is a web application that dynamically displays cat images using the Cat API and React.

## Project Structure

- src/index.html: Main HTML file that loads the React app.
- src/css/styles.css: Styles for the application.
- src/js/api.js: Contains functions to interact with the Cat API.
- src/js/api.test.js: Tests for the Cat API functionality.
- src/js/components/App.jsx: Main React component for the application.
- src/js/main.jsx: React entry point.
- vite.config.js: Configuration file for Vite.
- .env: Contains environment variables (use VITE_CAT_API_KEY).
- package.json: Project dependencies and scripts.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd catsite
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a .env file in the root directory and add your Cat API key with the VITE_ prefix:
   ```
   VITE_CAT_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm run start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

6. Build the project for production:
   ```
   npm run build
   ```

7. Preview the production build:
   ```
   npm run preview
   ```

## Testing

Run the tests with:

```
npm run test
```

## Notes

This project uses Vite as the build tool and React for the user interface.