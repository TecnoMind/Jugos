const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var VersionFile = require('webpack-version-file-plugin');
const webpack = require('webpack');
var outputFilePath = "/generated";
const extractPlugin = new ExtractTextPlugin( 	 	
	{ filename: outputFilePath + '/app.css'});

module.exports={
   context: path.resolve(__dirname, 'src'),
    
   entry: './app.js',

    output:{
        path: path.resolve(__dirname, outputFilePath),
         filename: '[name].[hash].js',
         publicPath:  "/Jugui-Tono"
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
                  ['es2015', { modules: false }]
                ]
              }
            }]
      		},
          {
            test: /\.(html)$/,
            use: {
              loader: 'html-loader'
            }
          },

      		{
  				test: /\.scss$/,
 		   		include: [path.resolve(__dirname, 'src','assets','scss')],
			   	use: extractPlugin.extract({
			                use: [{
			                    loader: "css-loader"
			                }, {
			                    loader: "sass-loader"
			                }],
			                // use style-loader in development
			                fallback: "style-loader"
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
					  		outputPath: __dirname + outputFilePath 
					    } 
					} 
				] 
			}
   		]
  	},

  	resolve: {
        extensions: ['*', '.js','.html', '.css'],
        alias: {
            bootstrap_css: __dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'
        }
    },

    plugins: [
    	new HtmlWebpackPlugin({template:'./index.html'}),
    	extractPlugin,
    	 new VersionFile({
	          packageFile: __dirname + '/package.json',
	          template: __dirname + '/node_modules/webpack-version-file-plugin/version.ejs',
	          outputFile: __dirname + outputFilePath + '/version.json'
   		})
    	
  	],

    devServer: {
  		contentBase: path.resolve(__dirname, outputFilePath + "/assets/img"),
  		compress: true,
  		port: 9090,
  		stats: 'errors-only',
  		open: true
	},

	devtool: 'inline-source-map'
};