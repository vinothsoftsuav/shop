/** @type {import('tailwindcss').Config} */
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
      boxShadow: {
        // Add your custom box-shadow logic here
        'custom-shadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      },
    },
  },
  plugins: [],
}
