module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [
      'bg-red-500',
      'bg-red-400',
      'hover:bg-red-500',
      'bg-green-400',
      'hover:bg-green-500',
      'bg-yellow-400',
      'hover:bg-yellow-500',
      'bg-gray-200',
      'hover:bg-gray-300',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
