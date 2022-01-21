<template>
    <div class="ub ub-ver ub-ac ub-pc w100">
        <div class="vns-btn marb">
            <a href="https://clearself.github.io/vs-ui/dist/index.html#/" target="_blank" >vns-ui</a>
        </div>
        <div class="marb">组件展示：</div>
        <searchBtn></searchBtn>
        <div class="ub">
            <div class="cell"></div>
            <div class="cell"></div>
            <!-- <img :src="bg" alt=""> -->
        </div>
        <div class="ub marb">
            <vs-button @click="isShow = true" type="primary">Drag拖拽框</vs-button>
        </div>
        <el-button>element-btn</el-button>
        <!--<img style="width:500px;height:500px;" src="~$modules/img/BG.jpg" alt="">-->
        <!-- <div class="bg"></div> -->
        <el-button type="text" @click="dialogVisible = true">点击打开</el-button>
        <el-drawer
            title="我是标题"
            :visible.sync="dialogVisible"
            :direction="direction">
            <span>我来啦!</span>
        </el-drawer>
        <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">hover 激活</el-button>
        </el-popover>
        <span class="test">我是自定义样式变量</span>
    </div>
</template>
<script>
import { get_data } from '@/server/common'
export default {
    name: 'Login',
    data() {
        return {
            bg: require('global-module/src/assets/img/BG.jpg'),
            isShow: false,
            dialogVisible: false,
            direction: 'rtl'
        }
    },
    created() {
        // this.init()
    },
    methods: {
        close(val) {
            this.isShow = val
        },
        init() {
            let data = {
                queryData: {},
                paramsData: {
                    username: '付雷洋',
                    type: 1,
                    password: '5b5ffebb84c9e8eda405fd4ef0e5b207',
                    verificationCode: 't995',
                    z: ['1', '2', '4', {
                        name: '付雷洋@'
                    }],
                    a: {
                        name: '小明',
                        a: [2, 3, 4],
                        b: [
                            {
                                name: 'ceshi',
                                id: 2
                            }
                        ]
                    }
                }
            }
            get_data(data).then(res => {
                console.log(res)
            }).then(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss">
    .test {
        @include themeify {
            background: themed('bg-color');
            color: themed('font-color');
            font-size: themed('font-size');
        }
    }
    .cell {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        background: red;
    }
    .marb{
        margin-bottom: 20px;
    }
    .vns-btn{
        a {
            color:blue;
            font-size:16px;
            text-decoration: underline;
        }
        a:hover{
            color:blue;
            text-decoration: underline;
        }
    }
    .bg{
        width:100%;
        height:600px;
        background-image: url('~$modules/img/BG.jpg');
    }
</style>
