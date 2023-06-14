const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MFPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('./package.json');

require('json5/lib/register');

module.exports = {
    output: {
        publicPath: 'auto',
        filename: 'app.min.[hash].js',
        path: path.resolve(__dirname, './build')
    },
    entry: '@root/src/store/withRedux.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.json5'],
        plugins: [new TsconfigPathsPlugin({
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.json5']
        })],
        alias: {
            '@root': path.resolve('./packages/app')
        }
    },
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']

            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-modules-typescript-loader" },
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.json5$/,
                type: 'javascript/auto',
                use: ['json5-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new MFPlugin({
            name: "EcommApp",
            filename: "ecommApp.js",
            exposes: {
                './EcommHome': './packages/app/src/pages/profile/index.tsx'
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            }
        })
    ]
};