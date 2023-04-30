// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'red-shade': '#eb575c',
				'primary': '#EA575C',
				'primary-active': '#E62930',
				'border-base': '#adadad',
				'secondary': '#F5F5F5',
				'tertiary': '#DDDDDD',
				'text-tertiary': '#333333',
				'quarternary': '#D9D9D9',
			},
		},
		boxShadow: {
			base: '0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)'
		},
		opacity: {
			65: '.65',
		}
	},
	plugins: [],
};
