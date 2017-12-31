const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    context:_dirname, 
    
    entry:{
        'app':"",
    },
    
    output:{
        path: path.resolve(_dirname,'/generated'),
        fileName: "[name].[hash].js",
        publicPath:  "/Jugui-Tono"
    }
};