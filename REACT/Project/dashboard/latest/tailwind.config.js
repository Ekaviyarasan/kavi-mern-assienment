/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          primary: '#0077B5', // LinkedIn blue
          secondary: '#000000', // Black
          background: '#FFFFFF', // White
          surface: '#F3F2EF', // Light gray background
          accent: '#E7E9EC', // Lighter gray
          text: '#333333', // Dark gray text
          muted: '#666666', // Muted text
          success: '#0A66C2', // Slightly different blue for success
          hover: '#005885', // Darker blue for hover
        },
      },
      backgroundImage: {
        'linkedin-gradient': 'linear-gradient(135deg, #0077B5 0%, #0A66C2 100%)',
        'linkedin-light': 'linear-gradient(135deg, #F3F2EF 0%, #E7E9EC 100%)',
      },
    },
  },
  plugins: [],
}