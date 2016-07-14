const webpack = require('webpack');

module.exports = {
    //entry: './src/js/app.ts',
    output: {
        //path: './public/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
          test: /\.tsx?$/,
          loader: 'webpack-typescript?target=ES5&jsx=react'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: true,
            },
        }),
    ]
};
