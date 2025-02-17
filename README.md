# Cat Web App

This project is a web application that dynamically displays cats using the Cat API and the cats-js library.

## Project Structure

- `src/index.html`: The main HTML document for the website.
- `src/css/styles.css`: Contains the styles for the website.
- `src/js/app.js`: The main JavaScript file that initializes the application.
- `src/js/api.js`: Contains functions to interact with the Cat API.
- `.env`: Contains environment variables, including the `CAT_API_KEY`.
- `package.json`: Configuration file for npm, listing dependencies and scripts.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd cat-web-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Cat API key:
   ```
   CAT_API_KEY=your_api_key_here
   ```

5. Open `src/index.html` in your browser to view the application.

## Usage

Once the application is running, it will fetch and display cat images dynamically from the Cat API. Enjoy the cuteness!