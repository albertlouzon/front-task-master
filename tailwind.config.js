/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  safelist: [
    'text-blue',
    'text-purple',
    'border-blue',
    'border-purple'
  ],
  theme: {
    colors: {
      'blue': '#172554',
      'purple': '#e9d5ff'
    }
  },
  plugins: [],
}
