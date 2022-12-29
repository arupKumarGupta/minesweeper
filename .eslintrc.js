module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"jest": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
		"tsconfigRootDir": ".",
		"ecmaFeatures": {
			"jsx": true
		},
	},
	"plugins": [
		"react",
		"@typescript-eslint",
    "prettier"
	],
	"rules": {
		"react/react-in-jsx-scope": ["off"],
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
