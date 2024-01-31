/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    colors: {
      'blue': '#172554',
      'purple': '#7e5bef',
      'gray': '#d1d5db'
    },
    extend: {
      spacing: {
        '8xl': '96rem'
      },
      backgroundImage: {
        'cat': "url('/public/cat.pmg')",
      }
    }
  },
  plugins: [],
}
