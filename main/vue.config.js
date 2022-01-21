const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
/*
 * @Author: venus
 * @Date: 2022-1-5
 */
module.exports = {
    devServer: {
        port: 5000,
        proxy: { // 设置代理
            '/api': {
                target: 'http://10.10.109.162:17999/', // 需要代理的地址
                // target: 'http://10.18.3.66:8080/', // 需要代理的地址
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    '^/api': '' // 本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                }
            },

            // 图片服务代理
            '/imgServer': {
                // target: 'http://192.168.91.218:8081/', //需要代理的地址
                target: 'http://10.10.109.203:7699/', // 需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/imgServer': '' // 本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@mixins', resolve('src/mixins'))
            .set('@store', resolve('src/store'))
            .set('$', resolve('node_modules'))
            .set('$modules', resolve('node_modules/global-module/src/assets'))
        config.plugin('html')
            .tap((args) => {
                args[0].title = 'qiankun-venus'
                return args
            })
        config.resolve.symlinks(true)
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~$modules/css/mixin.scss";`
            }
        }
    }
}
