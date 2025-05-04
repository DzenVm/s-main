const twTheme = require('./tailwind-plugin/tw-theme');
const twGrid = require('./tailwind-plugin/tw-bs-grid');

module.exports = {
  content: [
    './layouts/**/*.{html,js}',
    './content/**/*.{md,html}',
    './themes/**/*.{html,js}',
  ],
  safelist: [
    '!bg-light',
    '!rounded-lg',
    '!ml-0',
    '!pt-0',
    '!h-2.5', // обов'язково
    'md:text-base', // бо теж була помилка
  ],
  theme: {
    extend: {
      colors: {
        light: '#f9fafb',
        dark: '#111827',
      },
    },
  },
  plugins: [
    twTheme,
    twGrid,
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
