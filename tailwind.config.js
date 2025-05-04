module.exports = {
    content: [
      './layouts/**/*.{html,js}',
      './content/**/*.{md,html}',
      './themes/**/*.{html,js}',
    ],
    theme: {
      extend: {
        spacing: {
          '2.5': '0.625rem',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  };
  