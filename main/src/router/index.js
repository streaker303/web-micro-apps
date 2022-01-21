import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const login = () => import('@/pages/Login.vue')
const Home = () => import('@/pages/Home.vue')

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        // {
        //     path: '/error',
        //     name: 'error',
        //     component: errorPage,
        //     meta: {
        //         title: '系统出错了'
        //     }
        // },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                title: '积极安全防御分析工具'
            }
        },
        {
            path: '/micrApp*', // 主应用路由页面加载微应用
            name: 'home',
            component: Home,
            meta: {
                title: '积极安全防御分析工具'
            }
        }
    ]
})
/* addRoutes的作用注入新的路由，而不是替换其他路由,需要先清空原来的路由*/
// router.selfaddRoutes = function(params) {
//     router.matcher = new Router().matcher
//     router.addRoutes(params)
// }
export default router
