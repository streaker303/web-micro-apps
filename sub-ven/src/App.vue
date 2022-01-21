<template>
    <div id="app" :class="'custom-' + themeClass">
        <router-view></router-view>
    </div>
</template>

<script>
import '$modules/css/yellow.css'
import '$modules/css/red.css'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'App',
    data() {
        return {}
    },
    created() {
        console.log(this.themeClass)
    },
    methods: {

    },
    computed: {
        // 通过global获取user的信息
        ...mapState('global', {
            themeClass: state => state.themeClass
        })
    }

}
</script>

<style lang="scss">
html,body{
    height: 100%;
}
#app {
    min-height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
