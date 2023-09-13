/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '-3xl': '0 -0.25rem 2rem rgba(50, 50, 50, 1)'
      },
      colors: {
        primary: {
          500: '#FF6363;',
          800: '#FF1313;'
        }
      },
      fontFamily: {
        serif: ['var(--font-barb)'],
        display: ['var(--font-inter)'],
        mono: ['var(--font-inter)']
      },
      fontSize: {
        xxs: '0.5rem'
      },
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
        'ultra-wide': '2080px'
        // => @media (min-width: 1280px) { ... }
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover']
    }
  }
}
