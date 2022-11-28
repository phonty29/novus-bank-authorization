module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      backgroundImage: {
        'sign-in': "url('/loginbng 1.png')",
        'green': "linear-gradient(270deg, #000000 5.08%, #076F32 104.24%)",
      },
      colors: {
        'purple': "#F30066",
        'grey': '#e3e3e3',
        'grey-txt': '#000'
      },
      backgroundColor: {
        'form': "#F0F2FF",
      },
      boxShadow: {
        'sign-in': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['14px', '16px'],
      md: ['18px', '21px'],
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    borderRadius: {
      'lg': '10px',
      '2xl': '20px',
    },
  },
  plugins: [],
};