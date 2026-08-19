import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#0b0c10", paper: "#f7f5f0", electric: "#7c5cff", acid: "#d9ff63", coral: "#ff5b4d" }, fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"], mono: ["var(--font-mono)", "monospace"] } } }, plugins: [] } satisfies Config;
