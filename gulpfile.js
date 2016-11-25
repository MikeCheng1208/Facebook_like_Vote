"use strict";
var gulp = require('gulp'),
    task = require('gulp-task'),
    gulpif = require( 'gulp-if' ),
	imagesjpeg = require('imagemin-mozjpeg'),
	imagespng = require('imagemin-pngquant'),
    gulpPlumber = require('gulp-plumber'),
    cache = require('gulp-cache')

/*
	gulp              : 自動化測試
    cache             : 快取
	imagemin-mozjpeg  : 圖片壓縮 jpg
	imagemin-pngquant : 圖片壓縮 png
	gulpif            : 判斷條件
	gulpPlumber       : 例外處理

*/


/*Images*/
gulp.task( 'images', function () {
    return gulp.src( 'src/images/**/*.{jpg,png,gif}' )
        .pipe( gulpPlumber() )
        .pipe( gulpif( '*.jpg', cache(imagesjpeg( { quality: 70 })() )) )
        .pipe( gulpif( '*.png', cache(imagespng( { quality: 70 })() )) )
        .pipe( gulp.dest( 'app/images' ) )
});
gulp.task('img-watch', function () {
	gulp.watch(['src/images/**/*.{jpg,png,gif}'], ['images']);
});








gulp.task('webpack-build',function(cb){
  var webpack = require('webpack')
  var webpackConfig = require('./webpack.config.js')

  webpackConfig.plugins.push(
    new webpack.DefinePlugin({'process.env':{'NODE_ENV':'"production"'}}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}})
  )

  webpack(webpackConfig, function(err, stats){
        if(err)throw new Error(err.message)

        console.log(stats.toString({
            colors: true,
            chunkModules:false}))
        cb()
    }
  )
})

gulp.task('p', ['webpack-build'])





gulp.task('webpack-dev-server', function(cb){
  var host = 'localhost'
  var port = 3000

  var webpack = require('webpack')
  var webpackDevServer = require('webpack-dev-server')
  var webpackConfig = require('./webpack.config.js')

  webpackConfig.devtool = 'cheap-module-eval-source-map'

  for(var name in webpackConfig.entry){
      webpackConfig.entry[name].push("webpack-dev-server/client?http://"+host+":"+port)
  }

  new webpackDevServer( webpack(webpackConfig), webpackConfig.devServer ).listen(port, host)
  
})

gulp.task('d',['webpack-dev-server'])
gulp.task('default',['webpack-dev-server'])