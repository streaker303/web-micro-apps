const path = require('path')
const port = 5001
function resolve(dir) {
    return path.join(__dirname, dir)
}
const { name } = require('../package.json')
module.exports = {
    publicPath: './',
    transpileDependencies: [
        /[/\\]node_modules[/\\](.+?)?element-ui(.*)[/\\]src/,
        /[/\\]node_modules[/\\](.+?)?element-ui(.*)[/\\]package/,
        /[/\\]node_modules[/\\](.+?)?f-render(.*)/,
        /[/\\]node_modules[/\\](.+?)?quill-image-drop-module(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-ele-form(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-ele-form-bmap(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-baidu-map(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-ele-upload-image(.*)/,
        /[/\\]node_modules[/\\](.+?)?@jiaminghi(.*)/,
        /[/\\]node_modules[/\\](.+?)?vuex(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-router(.*)/,
        /[/\\]node_modules[/\\](.+?)?jspdf(.*)/,
        /[/\\]node_modules[/\\](.+?)?bpmn-js(.*)/,
        /[/\\]node_modules[/\\](.+?)?camunda-bpmn-moddle(.*)/,
        /[/\\]node_modules[/\\](.+?)?xcrud(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue2-ace-editor(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-ueditor-wrap(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-json-viewer(.*)/,
        /[/\\]node_modules[/\\](.+?)?vuedraggable(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-property-decorator(.*)/,
        /[/\\]node_modules[/\\](.+?)?vant(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-codemirror(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-class-component(.*)/,
        /[/\\]node_modules[/\\](.+?)?vue-clipboard2(.*)/,
        /[/\\]node_modules[/\\](.+?)?html2canvas(.*)/,
        /[/\\]node_modules[/\\](.+?)?iview(.*)/,
        /[/\\]node_modules[/\\](.+?)?vns-ui(.*)/,
        'global-module'
    ],
    configureWebpack: {
        output: {
            // 把子应用打包成 umd 库格式
            library: `${name}-[name]`,
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    },
    chainWebpack: config => {
        const publicPath = process.env.NODE_ENV === 'production' ? 'https://qiankun.umijs.org/' : `http://localhost:${port}`
        // config.resolve.extensisons = ['.js', '.vue', '.json', '.css', '.scss']
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@mixins', resolve('src/mixins'))
            .set('@store', resolve('src/store'))
            .set('$', resolve('node_modules'))
            .set('$modules', resolve('node_modules/global-module/src/assets'))

        config.module
            .rule('fonts')
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 4096, // 小于4kb将会被打包成 base64
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:8].[ext]',
                        publicPath
                    }
                }
            })
            .end()
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 4096, // 小于4kb将会被打包成 base64
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:8].[ext]',
                        publicPath
                    }
                }
            })
        config.resolve.symlinks(true)
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "~$modules/css/mixin.scss";`
            }
        }
    },
    devServer: {
        port: port,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: { // 设置代理
            '/api': {
                // target: 'http://10.10.109.162:17999/', // 需要代理的地址
                target: 'http://10.18.3.66:8080/', // 需要代理的地址
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
    }
}
