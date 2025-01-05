/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#f45a2a',
        secondary: '#00FF00',
        tertiary: '#0000FF',
        textSub: '#475467',
        footer:'#101828',
      },
      backgroundImage: {
        sessionImg: "url('/public/image/section-background.png')",
      },
      keyframes:{
        "fade-in-left": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(-100%, 0, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
          },
          "fade-in-right": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(100%, 0, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
          },
      },
      animation: {
        fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
        fadeinright: 'fade-in-right 1s ease-in-out 0.25s 1',
      }
    },
  },
  plugins: [],
}

