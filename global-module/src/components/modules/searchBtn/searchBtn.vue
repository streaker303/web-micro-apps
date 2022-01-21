<template>
    <div class="btn_box" @click="searchBtn" :class="{'isAggary':bgc==='no_aggary'}">
        <div class="btn_inner_box">
            <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBtn',
    props: {
        title: {
            type: String,
            default: ''
        },
        bgc: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        searchBtn() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.btn_box{
    width:80px;
    display: inline-block;
    height:30px;
    line-height: 30px;

    background-image: url(./images/searchBg.png);
    background-repeat: no-repeat;
    background-position: right 0;
    background-size:100% 30px;
}
.btn_box.isAggary{
    background-image: url(./images/no_aggary.png);
}
.btn_inner_box{
    cursor:pointer;
    height:30px;

    p{
        width: 80px;
        text-align: center;
        font-size:12px;
        color:#fff;
    }
}
</style>
