var entryConfig = require('./entry');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entry = {};
var html = [];
for ( let i=0; i<entryConfig.length; i++ ) {
    entry[entryConfig[i].filename] = __dirname + '/' + entryConfig[i].path;
    html.push(
        new HtmlWebpackPlugin({
            title: entryConfig[i].title,
            filename: entryConfig[i].filename + '/index.html',
            template: './index.ejs',
            chunks: ['vendor',entryConfig[i].filename],
            chunksSortMode: function(chunk1, chunk2) {
                var order = ['vendor',entryConfig[i].filename];
                var order1 = order.indexOf(chunk1.names[0]);
                var order2 = order.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        })
    )
}

entry['vendor'] = [__dirname + '/polyfills.js',__dirname + '/mui.js'];

module.exports =  {
    entry: entry,
    html: html
};