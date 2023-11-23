/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "content-wrapper-max": "1200px",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/spacex-large.jpg')",
      },
      boxShadow: {
        shadowInner: "inset 0 -80px 0 0px rgb(255, 255, 255)",
        "shadow-inner-2": "inset 0 0 0 2px rgb(255, 255, 255)",
      },
      maxWidth: {
        "content-wrapper-max": "1200px",
      },
      padding: {
        "padding-page": "96px 0 0 0",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        korataki: [`Korataki-Regular`, `sans-serif`],
      },
      colors: {
        primary: "#EDC065",
        secundary: "#3e3e3e",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(.25, 1, .25, 1)", // Define a curva de Bezier personalizada
      },
      gridTemplateColumns: {
        "auto-1818px": "repeat(auto-fill,minmax(max(320px,20% - 32px),1fr))",
        "auto-960px":
          "repeat(auto-fill,minmax(max(320px,33.3333333333% - 32px),1fr))",
        "auto-768px": "repeat(auto-fill,minmax(max(320px,50% - 32px),1fr))",
        "auto-repeat": "repeat(auto-fill,minmax(320px,1fr))",
      },
      animation: {
        "height-in": "height-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "height-out": "height-out 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in": "fade-in 700ms ease-in forwards",
        overlayMouseIn: "overlayMouseIn 300ms ease-out 1",
        overlayMouseOut: "overlayMouseOut 300ms ease-out 1",
        buttonColorMouseIn: "buttonColorMouseIn 300ms ease-out 1",
        buttonColorMouseOut: "buttonColorMouseOut 300ms ease-out 1",
      },
      keyframes: {
        "height-in": {
          "0%": {
            height: "0",
          },
          "100%": {
            height: "100%",
          },
        },
        "height-out": {
          "0%": {
            height: "100%",
          },
          "100%": {
            height: "0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        overlayMouseIn: {
          "0%": {
            bottom: "-100%",
          },
          "50%": {
            bottom: "0%",
          },
          "51%": {
            bottom: "0%",
          },
          "100%": {
            bottom: "-100%",
          },
        },
        overlayMouseOut: {
          "0%": {
            bottom: "-100%",
          },
          "50%": {
            bottom: "0%",
          },
          "51%": {
            bottom: "0%",
          },
          "100%": {
            bottom: "-100%",
          },
        },
        buttonColorMouseIn: {
          "0%": {
            backgroundColor: "transparent",
          },
          "50%": {
            backgroundColor: "transparent",
          },
          "51%": {
            backgroundColor: "white",
          },
          "100%": {
            backgroundColor: "white",
          },
        },
        buttonColorMouseOut: {
          "0%": {
            backgroundColor: "white",
          },
          "50%": {
            backgroundColor: "white",
          },
          "51%": {
            backgroundColor: "transparent",
          },
          "100%": {
            backgroundColor: "transparent",
          },
        },
      },
      flexBasis: {
        "project-card": "calc(100%/3 - 10px)",
        "project-card-half": "calc(50% - 10px);",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("fm", ".fm &");
    },
  ],
};
