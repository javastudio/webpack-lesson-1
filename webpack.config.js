var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src',

	output: {
		path: 'dist',
		filename: 'bundle.js',
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: 'node_modules',
				include: __dirname + '/src',
			},
			{
				test: /\.css$/,
				exclude: 'node_modules',
				loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[hash:base64:12]'),
			}
		]
	},

	plugins: [
		new ExtractTextPlugin("app.css")
	]
};
