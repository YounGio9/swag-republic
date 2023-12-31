/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            "swag-yellow": "#FFF95F",
            "swag-red": "#bd1e31",
         },
         fontFamily: {
            swag: ["Whyte Inktrap", "sans-serif"],
            header: ["Bebas Neue", "sans-serif"],
         },
      },
   },
   plugins: [],
}
