const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractPlugin = new ExtractTextPlugin(
	{ filename: '[name].[hash].css'});

module.exports={

   entry: './src/app.js',

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },

     module: {
    	rules: [
      		{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /node_modules/,
				use: [{
				  loader: 'babel-loader',
				  options: {
					presets: [
					  ['es2015']
					]
				  }
				}]
      		},
            {
				test: /\.(html)$/,
                include: path.resolve(__dirname, 'src'),
				use: {
				  loader: 'html-loader'
				}
            },

      		{
  				test: /\.scss$/,
 		   		include: [path.resolve(__dirname, 'src','css')],
			   	use: extractPlugin.extract({
			                use: [
			                	{
			                		loader:"css-loader",
									options: {
                                //        url: false,
                                        minimize: true,
                                        sourceMap: true
									}
								},
								{
									loader:"sass-loader"
								}
							]
         	    })
    						
			},
			{ 
				test: /\.(woff|woff2|eot|ttf|otf)$/, 
				use: ['file-loader'] 
			},
			{ 
				test: /\.(jpg|png|gif|svg)$/, 
				use: [ 
					{ 
					  loader: 'file-loader', 
					  options: { 
					  		name: '[name].[ext]', 
					  		outputPath: 'img/'
						    //publicPath: 'img/'
					    } 
					} 
				] 
			},
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
   		]
  	},
    devServer: {
        inline: true,
        port: 8484,
        historyApiFallback: {
            index: '/pv-app/'
        }
    },

    plugins: [
    	new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html'
    	}),
    	extractPlugin,
		new CleanWebpackPlugin(['dist'])
  	],

};