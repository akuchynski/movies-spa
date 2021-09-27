const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: './build',
        compress: true,
        port: process.env.NODE_ENV === 'production' ? 8000 : 9000,
        open: {
            app: {
                name: 'chrome',
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        }),
    ],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};