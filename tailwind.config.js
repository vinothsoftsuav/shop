/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust if necessary
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        'green': '#4d7c0f',    // Add a custom red color
        'custom-green': '#00FF00',  // Add a custom green color
        'alive-green': '#A8E6CE',   // Add an "alive green" color (as an example)
        'custom-blue': '#0000FF',   // Add a custom blue color
      },
    },
    
  },
  plugins: [],
}


