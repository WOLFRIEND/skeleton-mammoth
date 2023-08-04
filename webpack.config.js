const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const RemovePlugin = require('remove-files-webpack-plugin');
const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/styles/skeleton-mammoth.scss',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        minimize: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'skeleton-mammoth.min.css',
        }),
        new RemovePlugin({
            /**
             * After compilation moves
             * `./dist/main.min.js` file to the trash.
             */
            after: {
                root: './dist',
                include: [
                    'main.min.js',
                ],
                trash: true
            }
        })
    ]
};