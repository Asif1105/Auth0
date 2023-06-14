const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const DefinePlugin = require('webpack').DefinePlugin;
// const ProvidePlugin = require('webpack').ProvidePlugin;
const dotenv = require('dotenv');

dotenv.config();

const ModuleFedHostConfig = new ModuleFederationPlugin({
    name: "Auth0",
    filename: "auth0.js",
    remotes: {
        "EcommApp": "EcommApp@http://localhost:8080/ecommApp.js"
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
    },
});

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "public"),
        },
        port: 4000,
        open: true,
        hot: true,
    },
    module: {
        rules: [{
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }],
                        ],
                    },
                }, ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss|sass)$/i,
                use: ["sass-loader"],
            },
            {
                test: /\.(gif|jpe?g|svg)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets/images",
                    },
                }, ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
            manifest: "./public/manifest.json",
        }),
        ModuleFedHostConfig,
        new DefinePlugin({
            'process.env': process.env
        }),
        // new ProvidePlugin({
        //     process: 'process/browser'
        // })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};