/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lora"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Lora"', '"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Lora"', 'Georgia', 'serif'],
        script: ['"Pinyon Script"', '"Alex Brush"', 'cursive'],
      },
      colors: {
        terion: {
          bg: '#EEEDEA',
          'bg-light': '#F8F7F4',
          'bg-dark': '#121110',
          'surface-dark': '#1C1A18',
          card: '#FFFFFF',
          'card-dark': '#201E1C',
          orange: '#E6772E',
          'orange-hover': '#CF6620',
          amber: '#542B0F',
          charcoal: '#111111',
          stone: '#413936',
          muted: '#726C66',
          border: '#DCD8D5',
          'border-dark': 'rgba(255, 255, 255, 0.08)',
          sand: '#E5E1DA',
          gray: '#AFAFAF',
        },
        adobek: {
          teal: '#1E4E4E',
          'teal-hover': '#163B3B',
          'teal-light': '#2A6868',
          'teal-pale': '#E8F1F1',
          terracotta: '#E6772E',
          'terracotta-dark': '#C85C1B',
          mint: '#EAF2F2',
          sky: '#C7DEED',
          'sky-light': '#E3EFF7',
          cream: '#FAF8F5',
          sand: '#EEEDEA',
          warmgray: '#DCD8D5',
          taupe: '#9C9083',
          muted: '#726C66',
          charcoal: '#111111',
          dark: '#121110',
          gold: '#E6772E',
        },
        ashara: {
          teal: '#1E4E4E',
          'teal-hover': '#163B3B',
          'teal-light': '#2A6868',
          dark: '#121110',
          charcoal: '#111111',
          gold: '#C5A880',
          terracotta: '#E6772E',
        }
      },
      borderRadius: {
        'pill': '9999px',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        'terion': '0 8px 30px rgba(0, 0, 0, 0.04)',
        'terion-hover': '0 20px 40px rgba(0, 0, 0, 0.08)',
        'terion-dark': '0 8px 30px rgba(0, 0, 0, 0.3)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'luxury-lg': '0 30px 60px -20px rgba(0, 0, 0, 0.15)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
      }
    },
  },
  plugins: [],
}
