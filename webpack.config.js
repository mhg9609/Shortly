const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
        /*filename: '[name].[content hash].js',*/
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(css|pcss)$/,
                include: [
                    path.resolve(__dirname, "src/styles/")
                ],
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                include: [
                    path.resolve(__dirname, "src/assets/")
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ],
            },
            {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, "src/")
                ],
                use: [
                    'html-loader'
                ]
            },
        ]
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
}
