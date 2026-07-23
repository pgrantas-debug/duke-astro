export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141414',
        concrete: '#1F1F21',
        concrete2: '#29292B',
        cream: '#EDEAE5',
        amber: '#D9A24B',
        'amber-dark': '#B98630',
        wine: '#8A3B4E',
        stone: '#8F8B86',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
