/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        custom_green: '#43AD28',
        custom_orange: '#EB6402',
        custom_red: '#EB0237',
        custom_red_hover: '#A01131',
        custom_red_active: '#701328',
        item_color: '#0B0E12',
        inner_item_color: '#101318',
        white_text: '#FAFAFA'
      },
      screens: {
        'large_screen': '1840px',
      },
      fontFamily: {
        inter_semibold: ['Inter', 'sans-serif'],
        tactic_sans: ['TacticSans', 'sans-serif'],
      },
      animation: {
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}

