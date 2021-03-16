const path = require('path');

module.exports = {
	entry: './app/index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	watchOptions: {
		ignored: /node_modules/,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react', '@babel/preset-env'],
					plugins: ['@babel/transform-runtime'],
				},
			},
		],
	},
};
