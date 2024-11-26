/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"azul-oscuro-mirador": "#20355e",
				"azul-claro-mirador": "#2CA0FF",
				"verde-metropoli": "#6db949",
				"verde-lemedic-100": "#00DCB8",
				"verde-lemedic-200": "#00CAB5",
				"verde-lemedic-300": "#00B8B1",
				"gris-lemedic-100": "#E2E2E2",
				"gris-lemedic-200": "#C9C9C9",
				"gris-lemedic-300": "#606060"
			},
			fontFamily: {
				'kepler-std': 'bold',
				'kepler-std': 'normal',
				'kepler-std': 'light',
				'dm-serif-display': 'normal'
			},
			dropShadow: {
				'3xl': '1px 2px #28282836',
			},
			keyframes: {
				slideDown: {
					'from': {
						opacity: '0',
						transform: 'translateY(-400px)',
					},
					'to': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				slideDown: 'slideDown 0.7s',
			}
		}
	},
	plugins: [],
}
