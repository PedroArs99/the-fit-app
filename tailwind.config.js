/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				tfa: {
					primary: '#e07a5f',
					'primary-content': '#3d405b',

					secondary: '#3d405b',
					'secondary-content': '#ffffff',

					accent: '#81b29a',
					neutral: '#f2cc8f',

					'base-100': '#ffffff',
					'base-content': '#3d405b',

					'--rounded-btn': '2rem'
				}
			}
		]
	},
	theme: {
		extend: {}
	},
	plugins: [daisyui]
};
