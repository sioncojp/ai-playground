import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';

const { violet, green, red, amber, sky, zinc } = colors;

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primaryLight: violet["200"],
				primaryMain: violet["500"],
				primaryDark: violet["950"],
				primaryHover: violet["100"],
				primarySelected: violet["50"],
				primaryFocus: violet["100"],
				successLight: green["200"],
				successMain: green["500"],
				successDark: green["950"],
				successHover: green["100"],
				successSelected: green["50"],
				successFocus: green["100"],
				errorLight: red["200"],
				errorMain: red["500"],
				errorDark: red["950"],
				errorHover: red["100"],
				errorSelected: red["50"],
				errorFocus: red["100"],
				warningLight: amber["200"],
				warningMain: amber["500"],
				warningDark: amber["950"],
				warningHover: amber["100"],
				warningSelected: amber["50"],
				warningFocus: amber["100"],
				infoLight: sky["200"],
				infoMain: sky["500"],
				infoDark: sky["950"],
				infoHover: sky["100"],
				infoSelected: sky["50"],
				infoFocus: sky["100"],
				defaultLight: zinc["200"],
				defaultMain: zinc["500"],
				defaultDark: zinc["950"],
				defaultHover: zinc["100"],
				defaultSelected: zinc["50"],
				defaultFocus: zinc["100"],
			},
			spacing: {
				sideNavOpen: '12rem',
				sideNavClose: '4rem',
			}
		},
	},
	plugins: [],
};
export default config;
