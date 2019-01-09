const path = require('path');
const webpack = require('webpack');


//plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { 
        app: './src/core/app.ts',
    },
    output: {
        filename: 'core/[name].js',
        path: path.resolve(__dirname, 'dist'),

    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.jpg']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',

            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
              test: /\.(jpg|png)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: '../img/'
                  }
                }
              ]
            },
            {
                test: /\.ttf$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "css/fonts/[name].[ext]",
                  },
                },
              },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader'],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            
        ],
    },
    plugins: [
        new ExtractTextPlugin (
            'css/[name].css'
        ),
        new HtmlWebpackPlugin ({
          filename: 'index.html',
          template: 'src/index.html',
          chunks: ['app']
        }),
        new CleanWebpackPlugin (['dist'])
    ],
        
};