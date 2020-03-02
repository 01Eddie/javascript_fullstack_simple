const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');//Esto es para que se almacene en el codigo de html y donde esta almacenado en la carpeta public,  aparte limpia el codigo
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Esto es para utilizar todo en su lugar, es decir que el codigo q se requiere en css..


const devMode = process.env.NODE_ENV !== 'production';

console.log(devMode)

module.exports = {

    entry: './frontend/app.js',
    output: {
        path: path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    //mode: 'development',
    mode: 'production',

    module: {
        rules: [
            {
            test: /\.css/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader'
            ]
            }
        ]
    },

    plugins: [
        new HtmlwebpackPlugin({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundanAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css'
        })
    ],
    devtool: 'source-map'

};