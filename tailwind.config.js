module.exports = {
    content: [
      './layouts/**/*.{html,js}',
      './content/**/*.{md,html}',
      './themes/**/*.{html,js,md}',
    ],
    safelist: [
      {
        pattern: /^(md|lg|xl|sm):text-.+$/,
        variants: ['responsive'],
      },
      {
        pattern: /^text-.+$/,
      },
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }
  