const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractPlugin = new ExtractTextPlugin(
    { filename: '[name].[hash].css'});
var helpers = require('./helpers');



module.exports={

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
    },

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('src', 'tsconfig.json')
                        }
                    } ,
                    'angular2-template-loader'
                ]
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
                test: /\.(jpe|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                use: ['file-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'img/[hash]-[name].[ext]',
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
            index: '/technomind/'
        }
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
            helpers.root('./src') // location of your src
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app','vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),
        extractPlugin,
        new CleanWebpackPlugin(['dist'])
    ],

};