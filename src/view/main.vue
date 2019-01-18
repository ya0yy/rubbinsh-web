<template>
    <div id="app">
        <el-container>
            <!-- 头 -->
            <el-header height="auto">
                <!--
                 mode：导航栏的样式，这里设置如果是移动端就显示折叠样式，pc端显示顶部导航样式
                 default-active：当前选中
                 background-color：背景色，绑定到embg
                 active-text-color：选中时的颜色
                 router：路由模式，这里如果开启就直接和vue的路由对接，index就是路由地址，否则每个菜单项都是a标签的形式
                 @mouseenter.native：鼠标移入事件，给导航换了个颜色
                 @mouseleave.native：移除也换个颜色
                 -->
                <el-menu
                        :mode="cliWidth > 768 ? 'horizontal' : 'vertical'"
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        :background-color="embg ? 'black' : '#dabcbf'"
                        text-color="white"
                        active-text-color="#ffd04b"
                        router="true"
                        @mouseenter.native="embg=!embg"
                        @mouseleave.native="embg=!embg"
                >
                    <!-- 当浏览器宽度大于768时显示pc端导航栏 -->
                    <template v-if="cliWidth > 768">
                        <el-menu-item index="/" v-navBarCss="el">首页</el-menu-item>
                        <el-menu-item index="test" disabled>消息中心</el-menu-item>
                        <el-menu-item index="test">test</el-menu-item>
                        <li class="login">
                            <el-button type="success">注册</el-button>
                            <el-button type="primary">登录</el-button>
                        </li>
                    </template>

                    <!-- 当浏览器宽度小于768时显示适配于移动端的导航栏 -->
                    <el-submenu index="2" v-if="cliWidth < 768">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="/">首页</el-menu-item>
                        <el-menu-item index="test" disabled>消息中心</el-menu-item>
                        <el-menu-item index="test">test</el-menu-item>
                    </el-submenu>

                </el-menu>


            </el-header>

            <!-- 主体 -->
            <el-main>
                <!-- 动画包裹 -->
                <transition enter-active-class="" leave-active-class="animated zoomOut" mode="out-in"
                            :duration="{enter:730, leave:500}">
                    <router-view></router-view>
                </transition>
            </el-main>

            <!-- 尾部版权信息 -->
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
    export default {
        created() {
        },
        mounted() {
            // 监听浏览器大小变化，将宽度实时赋值给vm的cliWidth
            window.onresize = () => {
                return (() => {
                    this.cliWidth = document.body.clientWidth
                })()
            }
        },
        data() {
            return {
                // 导航栏的初始颜色
                embg: false,
                // 当前浏览器客户端的屏幕宽度
                cliWidth: document.body.clientWidth
            }
        },
        methods: {},
        directives: {
            // 自定义指令，当pc版导航栏被创建时给设置下导航栏第一个元素的左外边距
            navBarCss: {
                inserted: (el, xx, vnode) => {
                    el.style.marginLeft = '100px'
                }
            }
        }
    }
</script>
<style scoped>
    .el-header, .el-footer, .el-main {
        text-align: center;
    }

    /*背景图*/
    #app {
        background: url(../img/index_bg.png) no-repeat;
        background-color: #f8ffd2;
        height: 1202px;
    }

    /*导航圆角*/
    .el-menu,.el-submenu {
        padding: 0 10px 0 10px;
        border-radius: 10px;
    }

    .login {
        margin-right: 100px;
        text-align: center;
        line-height: 60px;
        float: right;
    }
</style>