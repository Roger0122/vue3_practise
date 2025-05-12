export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  safelist: ['bg-red-500'], // 👈 強制保留
  theme: {
    extend: {},
  },
  plugins: [],
}