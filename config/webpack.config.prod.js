var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var Config = require('./config');

module.exports = {
    entry: Config.entry,
    output: {
        filename: '[name]/[name].[hash].js',    
        publicPath: '/',                      //指定资源引用的目录
        path: path.resolve('dist')              //指定打包后文件的输出目录
    },
    resolve: {
        alias: {},
        extensions: ['.js','.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react'],
                        cacheDirectory: true,
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9'
                                    ],
                                    flexbox: 'no-2009'
                                })
                            ]
                        }
                    },
                    {
                        loader: require.resolve('less-loader')
                    }
                ]
            },
            {
                test: /\.(bmp|gif|jpeg|jpg|png)$/,
                use: [
                    {
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/images/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.ttf$/,
                loader: require.resolve('file-loader')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ...Config.html,
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devServer: {
        hot: true,
        inline: true,
        port: 8080
    }
}