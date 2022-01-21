<template>
    <div id="app">
        <router-view />
        <div id="subapp-viewport"></div>
    </div>
</template>

<script>
import '$modules/css/yellow.css'
import '$modules/css/red.css'
export default {
    name: 'App',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
html, body{
    margin: 0 !important;
    padding: 0;
}
</style>
