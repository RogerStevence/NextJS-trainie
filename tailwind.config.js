/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'custom': '0px', // Указываем начальное значение для пользовательского экрана
        '2xl': '1440px'
      },
    },
    container: {
      center: true,
      screens: {
        '2xl': '1440px'
      }
    },
    

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'AboutUS-bg': "url('/public/AboutUS-bg.png')",
        'Program-bg': "url('/public/1st_program.png')",
        'Program-bg': "url('/public/2nd_program.png')",
        'Program-bg': "url('/public/3d_program.png')",
        'Program-bg': "url('/public/4th_program.png')"
      },
      colors: {
        primary: '#46620B',
        seccondary: '#ECBD00'
      },
      boxshadow: {
        main: '2px 6px 15px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
