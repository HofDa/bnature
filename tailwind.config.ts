
import type { Config } from "tailwindcss";


const config: Config = {
// darkMode entfernt → nur Light Theme
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
theme: {
extend: {
fontFamily: {
display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
},
colors: {
primary: {
50: "#ECF6ED", 100: "#D7ECDD", 200: "#BFE3C0", 300: "#9CD2A1", 400: "#78C184",
500: "#559F63", 600: "#5B8C53", 700: "#2F7D32", 800: "#28682B", 900: "#1E4C20",
},
river: {600: "#2A7CA0", 700: "#1F5C77"},
sand: {100: "#EDE7D9", 200: "#DFD6C4"},
bark: {600: "#6C625B", 700: "#5B504A", 800: "#403833"},
},
},
},
plugins: [],
};


export default config;
