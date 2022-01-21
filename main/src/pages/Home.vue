<template>
    <div id="main" :class="position">
        <div v-if="position==='x'" class="layout-header">
            <div class="logo" @click="$router.push({path: '/micrApp'})">微前端(qiankun)架构应用</div>
            <ul class="sub-apps">
                <li v-for="item in microApps" :class="{active: item.activeRule === current}" :key="item.name" @click="goto(item)">{{ item.cn }}</li>
                <el-button @click="switchTheme('yellow')">黄色</el-button>
                <el-button @click="switchTheme('red')">红色</el-button>
                <el-button @click="switchTheme('default')">默认</el-button>
                <el-button @click="switchHeader">切换菜单</el-button>
                <span class="test">我是自定义样式变量</span>
            </ul>
            <div class="userinfo">主应用的用户名：{{ user.name }}</div>
        </div>
        <div v-else class="box">菜单
            <button @click="switchHeader">切换菜单</button>
        </div>
        <!--<div id="subapp-viewport"></div>-->
    </div>
</template>

<script>
import { toggleClass } from '../utils/index'
import NProgress from 'nprogress'
import microApps from '../micro-app'
import store from '@/store'

export default {
    name: 'Home',
    data() {
        return {
            isLoading: true,
            microApps,
            current: '',
            history: window.history,
            position: 'x'
        }
    },
    watch: {
        isLoading(val) {
            if (val) {
                NProgress.start()
            } else {
                this.$nextTick(() => {
                    NProgress.done()
                })
            }
        }
    },
    computed: {
        user() {
            return store.getGlobalState('user')
        }
    },
    methods: {
        switchTheme(color) {
            toggleClass(document.body, 'custom-' + color)
            if (color === '') document.body.classList.remove('custom-')
            // if (color) {
            //     document.body.classList.remove('custom-yellow', 'custom-red')
            //     document.body.classList.add('custom-' + color)
            // } else {
            //     document.body.classList.remove('custom-yellow', 'custom-red')
            // }
            store.setGlobalState({ themeClass: color })
        },
        switchHeader() {
            let obj = {
                x: 'y',
                y: 'x'
            }
            this.position = obj[this.position]
        },
        goto(item) {
            console.log(item)
            this.current = item.activeRule
            history.pushState(null, item.activeRule, item.activeRule) // 没引入路由，所以不能用路由切换
        },
        bindCurrent() {
            const path = `/${window.location.hash}`
            if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
                this.current = path
                console.log('this.current', this.current)
            }
        },
        listenRouterChange() {
            const _wr = function(type) {
                const orig = history[type]
                return function() {
                    const rv = orig.apply(this, arguments)
                    const e = new Event(type)
                    e.arguments = arguments
                    window.dispatchEvent(e)
                    return rv
                }
            }
            history.pushState = _wr('pushState')

            window.addEventListener('pushState', this.bindCurrent)
            window.addEventListener('popstate', this.bindCurrent)

            this.$once('hook:beforeDestroy', () => {
                window.removeEventListener('pushState', this.bindCurrent)
                window.removeEventListener('popstate', this.bindCurrent)
            })
        }
    },
    created() {
        // 首先高亮第一个子项目的菜单
        // this.current = microApps[0].activeRule
        // this.bindCurrent()
        // NProgress.start()
        // 根据hash高亮菜单
        // const path = `/${window.location.hash}`
        // if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
        //     this.current = path
        // }
    },
    mounted() {
        this.listenRouterChange()
    }
}
</script>

<style lang="scss">
//@import "$modules/css/mixin.scss";

.test {
    @include themeify {
        background: themed('bg-color');
        color: themed('font-color');
        font-size: themed('font-size');
    }
}
html, body{
    margin: 0 !important;
    padding: 0;
}
.layout-header{
    height: 50px;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    line-height: 50px;
    position: relative;
}
.box {
    width: 50px;
    height: 100vh;
    background: yellowgreen;
}

.y{
    display: inline-block;
}
.x+#subapp-viewport{
    height: calc( 100vh - 50px );
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.y+#subapp-viewport{
    float: right;
    height: 100vh;
    width: calc(100% - 50px);
    overflow-x: hidden;
    overflow-y: auto;
    display: inline-block;
}
.logo {
    float: left;
    margin: 0 50px;
}
.sub-apps {
    list-style: none;
    margin: 0;
    overflow: hidden;
}
.sub-apps li{
    list-style: none;
    padding: 0 20px;
    cursor: pointer;
    float: left;
}
.sub-apps li.active {
    color: #42b983;
    text-decoration: underline;
}
.userinfo{
    position: absolute;
    right: 100px;
    top: 0;
}
</style>
