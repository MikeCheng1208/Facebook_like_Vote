var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// 存成實體的 html 檔，同時支援 ~xxx.jpg 的寫法
var htmlExtractText = new ExtractTextPlugin( "[name].html" );

// // 存在實體的 css 檔，同時支援 ~xxx.jpg 的寫法
var cssExtractText = new ExtractTextPlugin( "css/[name].css" );
var sassLoader = cssExtractText.extract( `css!postcss!stylus`, { 
    publicPath: '../'
});

module.exports = {
    context: path.resolve('src'),
    entry: {
        index: ['main']
    },
    output: {
        path: path.resolve('app'),
        filename: 'js/[name].js'       
    },
    plugins: [
        htmlExtractText,
        cssExtractText
    ],
    resolve: {
        root:[
            path.resolve('src'),
            path.resolve('src/js'),
            path.resolve('src/vue'),
            path.resolve('src/images'),
            path.resolve('src/css'),
            path.resolve('node_modules')
        ],
        extensions: ['', '.js', '.vue', '.html'] 
    },
    devServer:{
        proxy:{
            // '/xml/*.ashx':{
            //     target: 'http://www.toyota.com.tw/event/201609_sienta_teaser/',
            //     changeOrigin: true
            // }
        },
        stats:{
            colors: true,
            hash: false,
            version: false,
            timings: true,
            assets: true,
            chunks: false,
            chunkModules: false,
            modules: false,
            cached: false,
            reasons: false,
            source: false,
            errorDetails: true,
            chunkOrigins: false
        }
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                include: path.resolve('src'),
                exclude: /node_modules/,
                loader: htmlExtractText.extract(
                    `html?name=[name].html`,{
                        publicPath: '' // html 圖檔路徑
                    }
                )
                // loader: 'file?name=[name].html',
            },
            {
                test: /\.styl$/,
                loader: sassLoader,
                include: path.resolve('src/css')
            },
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                include: path.resolve('src/js')
            },
            {
                test: /\.vue$/,
                loader: 'vue',
                include: path.resolve('src/vue')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file?name=[path][name].[ext]',
                include: path.resolve('src/images')
            }
        ]
    },
    postcss:function(){
        return [
            require('autoprefixer')({browsers:'last 2 versions'})
        ]
    }
};
