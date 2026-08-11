/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        limestone: {
          DEFAULT: '#E9E6DC',
          50: '#FAF9F6',
          100: '#F4F2EC',
          200: '#E9E6DC', // Main Background
          300: '#DCD9D1', // Contrast Neutral / Cards
          400: '#C8C4B8',
          500: '#A6A192',
          600: '#7E7A6C',
          700: '#5A564A',
          800: '#38362E',
          900: '#1C1B18', // Primary Text
        },
        mist: {
          DEFAULT: '#DCD9D1',
          border: '#CBC7BD',
          card: 'rgba(220, 217, 209, 0.75)',
        },
        solar: {
          amber: '#d97706',
          gold: '#b45309',
          warm: '#c25e00',
          dark: '#1c1b18',
          emerald: '#059669',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'limestone-gradient': 'linear-gradient(180deg, #E9E6DC 0%, #F4F2EC 100%)',
        'gold-accent': 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
        'dark-accent': 'linear-gradient(135deg, #2b2924 0%, #1c1b18 100%)',
      }
    },
  },
  plugins: [],
};
