module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-purple': {
          300: '#8e44ad',
          200: '#c67de6',
          100: '#ede1f1',
        },
        'main-gray': {
          200: '#4F4F4F',
          100: '#ebebeb',
        },
        'main-blue': {
          300: '#2A3F56',
          200: '#004e98',
          100: '#3a6ea5',
        },
        'little-blue': '#d5e0ec',
      },
      ringWidth: {
        5: '5px',
      },
    },
  },
  plugins: [],
}
