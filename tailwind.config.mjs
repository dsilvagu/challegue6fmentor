/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'mont': ['"Montserrat Variable"', 'sans-serif'],
				'fra': ['"Fraunces Variable"', 'serif'],
			}
		},
		colors: {
			'pdcyan': 'hsl(158, 36%, 37%)',
			'pcream': 'hsl(30, 38%, 92%)',
			'pvdblue': 'hsl(212, 21%, 14%)',
			'pdgblue': 'hsl(228, 12%, 48%)',
			'pwhite': 'hsl(0, 0%, 100%)',
		}
	},
	plugins: [],
}
