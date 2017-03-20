module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry: __dirname + "/view/index.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	module: {
		loaders: [
			{test: /\.json$/, loader: "json"},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.css$/,
				loader: 'style!css?modules!postcss'
			}
		]
	},
	postcss: [
		require('autoprefixer')
	],
	devServer: {
		contentBase: "./public",//本地服务器所加载的页面所在的目录
		colors: true,//终端中输出结果为彩色
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	}
};