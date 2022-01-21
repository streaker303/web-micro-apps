# qiankun

[qiankun 项目参考](https://www.cnblogs.com/wuzhiquan/p/14090485.html?share_token=36c66145-5861-448b-a82c-f0a4ee7b8967)

## 开始
#### 1. 一键安装所有主子应用的依赖
```
npm run install
```
#### 2. 一键启动所有应用
```
npm start
```

#### 3. 通过 [http://localhost:5000/](http://localhost:5000/) 访问主应用

## 发布
> 由于使用了bash脚本，linux 下可直接在终端执行 run build，windows 系统需要使用 git 的 GitBashHere 命令窗口执行，否则会报错

#### 1. 打包到不同环境时，请确认主项目的 `entry` 地址是否正确
- 通过修改主项目 `.env.production` ---> 配置开发环境 `entry` 
- 通过修改主项目 `.env.test` ---> 配置生产/测试环境 `entry`

#### 2. 一键打包所有主子应用到开发环境
- bundle.sh 脚本将子应用包迁移到了 main 主项目 dist 下
- 主项目生成的包路径为  **/dist**
- 子项目生成的包路径为  **/dist/subapp**
```
npm run build
```
#### 3. 一键打包所有主子应用到测试环境
- 包路径同上
- 这里的测试环境指的是最终的线上环境，区别于打包到开发环境的是：测试环境 http 请求参数会进行加密处理
```
npm run test:build
```
## 其他
#### 1. 公共依赖
- 项目的公共静态文件（js/css/img 及 vue 组件）提取到 `global-module` 文件中， 通过`npm link` 形式进行关联

#### 2. 配置文件
- 为保证各 vue 子项目配置文件一致，子项目的 `sass-loader` 需 10.0.0 版本以上

#### 3. 主题切换
- 针对不同主题，在 `global-module/src/variable.scss` 进行颜色、字体相关配置

使用方法如下：
```
    .test {
        @include themeify {
            background: themed('bg-color');
            color: themed('font-color');
            font-size: themed('font-size');
        }
    }
```
