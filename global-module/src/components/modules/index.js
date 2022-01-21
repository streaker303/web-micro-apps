import Vue from 'vue'
import { searchBtn, cancelBtn } from './searchBtn/index.js'
const components = [
    searchBtn
]
const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

install(Vue)

export default {
    version: '0.0.1',
    searchBtn
}
