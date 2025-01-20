/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gif': "url('/background.gif')", // Single GIF background
      },
    },
  },
  plugins: [],
};
