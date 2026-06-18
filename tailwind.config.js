module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        market: {
          bg: '#F2F4F7',        // Soft gray-blue canvas
          navy: '#2D4D7A',      // Primary text and solid buttons
          slate: '#B7C7E6',     // Muted borders and subtext
          blue: '#9BBEFF',      // Market gain / positive lines
          yellow: '#FFEAA0',    // Accent highlight highlights
        }
      }
    },
  },
  plugins: [],
}
