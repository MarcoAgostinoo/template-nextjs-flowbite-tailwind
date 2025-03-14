import withMT from "@material-tailwind/react/utils/withMT";
import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const baseConfig: Config = {
  content: [
    "./app/pag/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      aspectRatio: { "577/310": "577 / 310" },
      colors: {
        primaryBlue: "#002b59",
        secondaryBlue: "#4a6cf7",
        successGreen: "#40c351",
        neutralGray: "#74608b",
        pureWhite: "#FFFFFF",
        deepBlack: "#212121",
        accentYellow: "#FFF9C4",
        subtlePurple: "#E8EAF6",
      },
      backgroundImage: {
        "custom-bg": "url('/blog/blogbackground.png')",
        sectionBackground: "url('/index/backgroundSection.jpg')",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(255, 255, 255, 0.6)",
        md: "2px 2px 4px rgba(255, 255, 255, 0.5)",
        lg: "3px 3px 6px rgba(255, 255, 255, 0.4)",
        amber: "0 1px 3px rgba(252, 211, 76, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-open"],
      opacity: ["group-open"],
    },
  },
  plugins: [
    flowbite.plugin(),
    function (pluginApi: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      const { addUtilities } = pluginApi;
      addUtilities({
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)",
        },
        ".text-shadow-lg": {
          textShadow: "3px 3px 6px rgba(255, 255, 255, 0.8)",
        },
        ".text-shadow-amber": {
          textShadow: "0 1px 3px rgba(252, 211, 76, 1)",
        },
      });
    },
    require("tailwindcss-animated"),
  ],
};

const config = withMT(baseConfig);
export default config;
