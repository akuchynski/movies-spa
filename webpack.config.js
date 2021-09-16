const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};