const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname,'lib'),
        contentBasePublicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: false
        })
    ]
}