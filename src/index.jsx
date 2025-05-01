import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Global styles using Tailwind's @apply directive
const globalStyles = `
  body {
    @apply m-0 font-sans antialiased;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  code {
    @apply font-mono;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    @apply h-screen;
  }
`;

// Create a style element and append it to the document head
const styleElement = document.createElement('style');
styleElement.textContent = globalStyles;
document.head.appendChild(styleElement);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 