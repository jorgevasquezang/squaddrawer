module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname + '/client/build',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
                        options: {
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader'

                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                }]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]'
                }
            }

        ]
    },
    devServer: {
        port: 3000,
        contentBase: './client/build',
        inline: true
    }
};