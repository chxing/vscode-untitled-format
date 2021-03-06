module.exports = {
	env: {
		browser: false, es6: true, node: true, commonjs: true,
	},
	extends: [
		'standard',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		'ecmaFeatures': { 'jsx': true },
		'ecmaVersion': 2018,
		'sourceType': 'module',
	},
	rules: {
		"no-const-assign": "warn",
		"no-this-before-super": "warn",
		"no-undef": "warn",
		"no-unreachable": "warn",
		"no-unused-vars": "warn",
		"constructor-super": "warn",
		"valid-typeof": "warn",
	}
}
