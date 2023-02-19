module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sign-in': "url('/loginbng 1.png')",
        'green-gradient':
          'linear-gradient(270deg, #000000 5.08%, #076F32 104.24%)',
        'bullet': "url('/on-stage.png')",
        'check': "url('/success.png')",
        'photo': "url('/photo-img.png')",
      },
      colors: {
        'purple': '#F30066',
        'grey': '#e3e3e3',
        'grey-br': '#a6a6a6',
        'green': '#076F32',
        'dark-green': '#054820',
        'white': '#ffffff'
      },
      backgroundColor: {
        'field': '#F0F2FF',
        'sign-up': '#e5e5e5',
      },
      boxShadow: {
        'sign-in': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'sign-up': '0px 0px 22px rgba(0, 0, 0, 0.25)',
      },
    },
    screens: {
      xxs: '275px',
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
      lg: ['24px', '28px'],
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    borderRadius: {
      'lg': '10px',
      'xl': '15px',
      '2xl': '20px',
      'full': '100%',
    },
  },
  plugins: [],
};
