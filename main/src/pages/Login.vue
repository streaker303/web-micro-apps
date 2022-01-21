<template>
    <div class="login home white">
        <div class="login-box-shadow1"></div>
        <div class="login-box-shadow2"></div>
        <div class="login-box">
            <!--<img class="login-title w100" :src="this.$store.state.common.loginImg" />-->
            <div class="login-content">
                <!-- <div class="login-text" style="color:#227cfa;font-size:24px;padding: 50px 0px 43px;">ASAP登录系统</div> -->
                <div class="login-text" style="color:#227cfa;font-size:24px;padding: 50px 0px 43px;">登录</div>
                <el-form class="login-from-box" :model="loginForm" :rules="loginRules" ref="loginForm">
                    <el-form-item prop="username" :label-width="formLabelWidth">
                        <el-input @keyup.native.enter="validUser('loginForm',loginForm)" prefix-icon="el-icon-user-solid" clearable placeholder="用户名" v-model.trim="loginForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item class="password" style="margin-top: 25px;" prop="password" :label-width="formLabelWidth">
                        <el-input @keyup.native.enter="validUser('loginForm',loginForm)" prefix-icon="iconfont icon-mima" show-password placeholder="密码" v-model.trim="loginForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="verify ub ub-ac ub-pj">
                        <el-form-item class="ub-f1" prop="captcha" :label-width="formLabelWidth">
                            <el-input style="width: 100%" @keyup.native.enter="validUser('loginForm',loginForm)" clearable placeholder="验证码" v-model.trim="loginForm.captcha" autocomplete="off"></el-input>
                        </el-form-item>
                        <div class="ub ub-ac ub-pj" style="margin: 0 0 22px 20px;width: 150px">
                            <img style="width: 120px;height: 40px;display: block;border-radius: 4px" :src="verifyCode" alt="验证码">
                            <i class="el-icon-refresh-right login-yzm" style="font-size: 20px" @click="handleRefresh"></i>
                        </div>
                    </div>
                </el-form>
                <div class="rember-pwd" style="margin: 10px 0 50px;">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                </div>

                <div class="ub ub-pc ub-f1 login-btn">
                    <el-button style="width:357px;" type="primary" @click="validUser('loginForm',loginForm)">登 录</el-button>
                </div>
            </div>
        </div>
        <!-- <div ref="canvasFrame" class="container"></div> -->
    </div>
</template>

<script>
import { login } from '../server/api.js'
import md5 from '$modules/js/md5.js'
// import Base64 from '../../assets/js/base64.js'
// import SvgImg from './svg_img.vue'
export default {
    name: 'Login',
    components: {
        // SvgImg
    },
    data() {
        return {
            loginImg: '',
            logoImg: '',
            loginForm: {
                username: '',
                password: '',
                captcha: ''
            },
            loginRules: {
                username: [{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }],
                captcha: [{
                    required: true,
                    message: '请输入验证码',
                    trigger: 'blur'
                }]

            },
            checked: false,
            formLabelWidth: '0px',
            refresh: 0
        }
    },
    created() {
        // this.handleRefresh()
        // let loginInfo = this.$getlocalStorage('loginInfo')
        // if (loginInfo != '') {
        //     loginInfo.password = Base64.decode(loginInfo.password)
        //     this.loginForm = loginInfo
        //     this.checked = true
        // }
    },
    mounted() {

    },
    computed: {
        isIE() {
            console.log('this.$curBrowser()', this.$curBrowser())
            return this.$curBrowser() === 'IE'
        },
        verifyCode() {
            return '/api/base_info/terminal/getCaptcha?width=120&height=40&' + this.refresh
        }
    },
    methods: {
        handleRefresh() {
            this.refresh = Date.now()
        },

        validUser(formName, obj) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login_user(obj)
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        login_user(obj) {
            let data = {
                queryData: {},
                paramsData: {
                    username: obj.username,
                    password: md5.md5_32(obj.password).toLowerCase(),
                    captcha: obj.captcha
                }
            }
            login(data).then(res => {
                console.log('success', res)
                // this.$setCookie(res.tokenName + 'baseInfo', 'http://' + location.host + '/')
                let userInfo = {
                    cnName: res.info.chineseName,
                    id: res.info.id,
                    type: res.info.roleId,
                    depName: res.depName
                }
                // this.$setsessionStorage('userInfo', userInfo)

                // if (this.checked) {
                //     let data = {
                //         username: this.loginForm.username,
                //         password: Base64.encode(this.loginForm.password)
                //     }
                //     this.$setlocalStorage('loginInfo', data)
                // } else {
                //     this.$removelocalStorage('loginInfo')
                // }
                setTimeout(() => {
                    this.$router.push({
                        path: '/micrApp'
                    }, 100)
                })
            }).catch(error => {
                console.log('error', error)
                this.handleRefresh()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.login-title {
    height:50px;
    position: absolute;
    left:50%;
    top:-100px;
    transform: translateX(-50%);
    width: auto;

}
.login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .3s cubic-bezier(.55,0,.1,1);
    margin: 0px;
    overflow: hidden;
    background-size: cover;
}

.login-bg {
    width: 50%;
    position: fixed;
    left: 0;
    top: 0;
    right: 50%;
    bottom: 0;
    img {
        height: 90%;
        position: absolute;
        bottom: 0
    }
}

.container {
    position: fixed;
    height: 700px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
}
.login-box-shadow2{
    width: 554px;
    height: 437px;
    position: fixed;
    top: 50%;
    right: 232px;
    transform: translateY(-50%);
    padding: 0px;
    z-index: 1;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0px 4px 35px 0px
    #104683;
    opacity: 0.1;
}
.login-box-shadow1{
    width: 522px;
    height: 500px;
    position: fixed;
    top: 50%;
    right: 247px;
    transform: translateY(-50%);
    padding: 0px;
    z-index: 2;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 4px 24px 0px
    #104683;
    border-radius: 15px;
    opacity: 0.3;
}

.login-box {
    width: 480px;
    height:570px;
    position: fixed;
    top: 50%;
    right: 268px;
    transform: translateY(-50%);
    padding: 0px;
    z-index: 3;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 4px 21px 0px
    #1f6bc1;
    border-radius: 15px;

}
.white ::v-deep .el-input__inner {
    background: transparent;
    border: 1px solid #e5e5e5;
    color: #333;
}
.white ::v-deep .el-input__inner::-webkit-input-placeholder{
    color: #ccc;
}

.white ::v-deep .el-input__icon, .white ::v-deep .el-input__prefix {
    width: 40px;
    color: #227cfa;
    font-size: 20px;
}
.white .login-box .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #227cfa!important;
}
.white-theme .white .login-box ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner,
.white-theme .white .login-box ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner::after {
    border-color: #227cfa!important;
}
.white-theme .white ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label,
.white-theme .white ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner::after {
    color: #227cfa !important;
    border-color: #227cfa !important;
}
.white-theme .white ::v-deep .el-input__icon::after {
    content: "";
    width: 1px;
    height: 40%;
    position: absolute;
    right: 0;
    top: 50%;
    background-color: rgba(0,0,0,0)!important;
    transform: translateY(-48%);
}

.white-theme .white ::v-deep .el-button--primary, .white-theme .white ::v-deep .el-button--primary:hover {
    background-color: rgba(0,0,0,0)!important;
    background-image: linear-gradient(-1deg,
        #337ff5 0%,
        #70ddf9 100%),
    linear-gradient(
            #0077e8,
            #0077e8)!important;
    background-blend-mode: normal, normal!important;
    border-radius: 5px;
    border:none!important;
    box-shadow: 0px 4px 3px
    rgba(0,0,0,.2)!important;

}
.login-logo{
    width:100%;
    position: absolute;
    left:0;
    top:-17px;
    text-align:center;
}
.login-content {
    width: 400px;
    margin:0 auto;
    position: relative;
    box-sizing: border-box;
}

.welcome {
    font-size: 14px;
    color: #99a0ac;
    span {
        font-size: 17px;
    }
}

.project-name {
    font-size: 24px;
    color: #5e676f;
    margin-top: 27px;
}
.login-yzm {
    margin-left: 10px;
    cursor: pointer;
    color: #227cfa;
}
.verify {
    margin-top:38px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
.svg{
    width:1381px;
    height:956px;
    position: absolute;
    left: 30px;
    bottom: 3px;
    img{
        display: block;
        width:100%;
        height:100%;
    }
}
</style>
<style>
:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s !important;
}
</style>
