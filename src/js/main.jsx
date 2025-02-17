import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import '../css/styles.css'

// Make Vite environment variables available globally
window.ENV_VITE_CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY || '';

// Add error boundary for development
if (import.meta.env.DEV) {
  window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.log('Window Error:', { msg, url, lineNo, columnNo, error });
    return false;
  };
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)