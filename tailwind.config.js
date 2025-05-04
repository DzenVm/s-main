module.exports = {
    content: [
      './layouts/**/*.{html,js}',
      './content/**/*.{md,html}',
      './themes/**/*.{html,js}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
  