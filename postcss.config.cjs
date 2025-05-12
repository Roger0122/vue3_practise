const createTailwindcss = require('@tailwindcss/postcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    createTailwindcss(),
    autoprefixer()
  ]
}
