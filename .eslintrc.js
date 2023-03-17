// eslint-disable-next-line no-undef
module.exports = {
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:jest/recommended',
		'plugin:jest/style',
		'plugin:testing-library/react',
		'next',
		'next/core-web-vitals',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react', '@typescript-eslint', 'jest'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],

			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/eslint-recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				'@typescript-eslint/require-await': 'error',
			},
			parserOptions: {
				project: ['tsconfig.json'],
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
	],
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
