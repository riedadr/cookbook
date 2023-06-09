/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			gridTemplateColumns: {
				"auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
				"auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
			},
			gridTemplateRows: {
				"auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
				"auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
			}
		},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					primary: "#22c55e",
					secondary: "#d946ef",
					accent: "#14b8a6",
					neutral: "#374151",
					"base-100": "#1f2937",
					info: "#0ea5e9",
					success: "#22c55e",
					warning: "#f59e0b",
					error: "#f43f5e",
				},
			},
			{
				light: {
					primary: "#22c55e",
					secondary: "#d946ef",
					accent: "#14b8a6",
					neutral: "#e5e7eb",
					"base-100": "#f9fafb",
					info: "#0ea5e9",
					success: "#22c55e",
					warning: "#f59e0b",
					error: "#f43f5e",
				},
			},
		],
	},
};
