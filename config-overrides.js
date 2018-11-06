'use strict';

const path = require('path');


module.exports = function override(config, env) {
	let alias = Object.assign(config.resolve.alias, {
		'@': path.resolve(__dirname, './src'),
	});

	config.resolve.alias = alias;
  return config;
};