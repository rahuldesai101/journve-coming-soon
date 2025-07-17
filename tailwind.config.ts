/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages//*.{ts,tsx}",
    "./components//*.{ts,tsx}",
    "./app//*.{ts,tsx}",
    "./src//*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F97316", // The orange from the logo
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Custom keyframes for background elements
        "move-plane": {
          "0%": { transform: "translateX(-100vw) translateY(50vh) rotate(5deg)", opacity: "0" },
          "20%": { opacity: "0.2" },
          "80%": { opacity: "0.2" },
          "100%": { transform: "translateX(100vw) translateY(-50vh) rotate(5deg)", opacity: "0" },
        },
        "move-cloud-1": {
          "0%": { transform: "translateX(-50vw) translateY(20vh)", opacity: "0" },
          "20%": { opacity: "0.1" },
          "80%": { opacity: "0.1" },
          "100%": { transform: "translateX(150vw) translateY(20vh)", opacity: "0" },
        },
        "move-cloud-2": {
          "0%": { transform: "translateX(150vw) translateY(70vh)", opacity: "0" },
          "20%": { opacity: "0.08" },
          "80%": { opacity: "0.08" },
          "100%": { transform: "translateX(-50vw) translateY(70vh)", opacity: "0" },
        },
        "move-star": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "50%": { opacity: "0.15" },
          "100%": { transform: "translateY(-100vh) translateX(100vw)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "move-plane": "move-plane 30s linear infinite",
        "move-cloud-1": "move-cloud-1 40s linear infinite",
        "move-cloud-2": "move-cloud-2 50s linear infinite",
        "move-star": "move-star 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}