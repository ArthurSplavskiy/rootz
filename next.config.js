const StylelintPlugin = require("stylelint-webpack-plugin"); // line to add

module.exports = {
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.(js|ts)x?$/,
			use: ['@svgr/webpack'],
		});
		config.plugins.push(new StylelintPlugin());

		return config;
	},
	// assetPrefix: './',
	// trailingSlash: true,
};
