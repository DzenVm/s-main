module.exports = {
    content: [
      './layouts/**/*.{html,js}',
      './content/**/*.{md,html}',
      './themes/**/*.{html,js}',
      './themes/**/*.{md}',
    ],
    safelist: [
      'md:text-base',
      'text-sm',
      'text-center',
      'bg-white',
      'dark:bg-black',
      'dark:text-white',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  };
  