module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
    screens: {
      mf: "990px", 
    },
  },
  plugins: [],
};
