const devConfig = {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        liveReload: true,
        hot: true,
        static: 'packages/**/*',
        open: true
    }
};

globalThis.env = 'DEV';
module.exports = devConfig;