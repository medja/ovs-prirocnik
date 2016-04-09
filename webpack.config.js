var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/i,
                include: [
                    path.join(__dirname, 'src')
                ],
                loaders: ['babel']
            },
            {
                test: /\.css$/i,
                include: path.join(__dirname, 'src', 'styles'),
                loaders: ['style', 'css']
            },
            {
                test: /\.css$/i,
                include: path.join(__dirname, 'src'),
                exclude: path.join(__dirname, 'src', 'styles'),
                loaders: ['style', 'css?modules']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.woff2?(\?.*)?$/i,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?.*)?$/i,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?.*)?$/i,
                loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]'
            },
            {
                test: /\.svg(\?.*)?$/i,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    resolve: {
        root: path.join(__dirname, 'src')
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};