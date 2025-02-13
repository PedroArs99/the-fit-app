/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				tfa: {
					primary: '#FF8000',
					'primary-content': '#111111',

					secondary: '#4C1F7A',
					'secondary-content': '#ffffff',

					accent: '#219B9D',
					neutral: '#EEEEEE',

					'base-100': '#ffffff',
					'base-content': '#111111',

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
