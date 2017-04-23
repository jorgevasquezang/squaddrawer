module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname+'/client/build',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            module: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                }]
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './client/build',
        inline: true
    }
};