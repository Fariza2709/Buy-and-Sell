module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'blue': '#93c5fd',
        'red': '#991b1b',
        'gainsboro': '#dcdcdc'
      },
      spacing: {
        '1040': '1040px',
        '338': '338px',
        '476': '476px',
        '391': '391px',
        '1450': '1450px',
        '549': '549px'
      },
      width: {
        '900': '900px',
        '300': '300px',
        '278': '278px',
        '134': '535px'
      },
      height: {
        '500': '500px',
        '393': '393px',
        '560': '560px'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.display-ruby': {
          display: 'ruby',
        },
      };

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
  ],
};
