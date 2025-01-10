/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      unbounded: ["Unbounded", "sans-serif"],
      "lt-superior": ["LT Superior", "sans-serif"],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        fit: ["clamp(1rem, 10vw, 6.875rem)", "1"],
        "default-test": "clamp(1rem, 10vw, 2.188rem)",
        "md-test": "clamp(1rem, 10vw, 2.5rem)",
        "lg-test": "clamp(1rem, 10vw, 4.063rem)",
        "2xl-test": "clamp(1rem, 10vw, 6.875rem)",
        "max-2xl-test": "clamp(1rem, 10vw, 8.5rem)",
      },
      colors: {
        "gray-medium": "#898989",
        "light-gray": "#AEAEAE",
        danger: "#E60E6E",
        tiffany: "#43D0D5",
        "bg-gray": "#F2F2F2",
        "bd-gray": "#B7B7B7",
      },
      maxWidth: {
        1920: "1920px",
      },
      screens: {
        "max-2xl": "1700px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
