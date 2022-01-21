/*
 * @Author: venus
 * @Date: 2020-11-25
 */
const path = require('path')
const port = 5002
function resolve(dir) {
    return path.join(__dirname, dir)
}
const { name } = require('../package.json')
module.exports = {
    publicPath: './',
    transpileDependencies: ['global-module'],
    devServer: {
        port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@mixins', resolve('src/mixins'))
            .set('@store', resolve('src/store'))
            .set('$', resolve('node_modules'))
            .set('$modules', resolve('node_modules/global-module/src/assets'))
        config.resolve.symlinks(true)
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~$modules/css/mixin.scss";`
            }
        }
    },
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}
