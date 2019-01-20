<template>
    <div>
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
                :mode="$store.state.cliWidth >= 768 ? 'horizontal' : 'vertical'"
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
            <template v-if="$store.state.cliWidth > 768">
                <el-menu-item index="/" v-navBarCss>首页</el-menu-item>
                <el-menu-item v-for="item in navBar_menu" :index="item.index">{{item.name}}</el-menu-item>
                <li class="login">
                    <el-button type="success">注册</el-button>
                    <el-button type="primary" @click="loginVisible = !loginVisible">登录</el-button>
                </li>
            </template>

            <!-- 当浏览器宽度小于768时显示适配于移动端的导航栏 -->
            <el-submenu index="2" v-if="$store.state.cliWidth <= 768">
                <template slot="title">我的工作台</template>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item v-for="item in navBar_menu" :index="item.index">{{item.name}}</el-menu-item>
                <li class="el-menu-item" @click="loginVisible = !loginVisible">登录</li>
            </el-submenu>

        </el-menu>
        <login :loginVisible="loginVisible" @showLogin="loginVisible = !loginVisible"></login>
    </div>

</template>

<script>

    import login from './login.vue'

    export default {
        data() {
            return {
                // 导航菜单
                navBar_menu: [
                    {index: {name: 'test'}, name: "消息中心"},
                    {index: {name: 'user'}, name: "个人中心"},
                ],
                // 导航栏的初始颜色
                embg: false,
                loginVisible: false
            }
        },
        methods: {
        },
        directives: {
            // 自定义指令，当pc版导航栏被创建时给设置下导航栏第一个元素的左外边距
            navBarCss: {
                inserted: (el, xx, vnode) => {
                    el.style.marginLeft = '100px'
                }
            }
        },
        components: {login}
    }
</script>

<style scoped>
    /*导航圆角*/
    .el-menu, .el-submenu {
        padding: 0 10px 0 10px;
        border-radius: 10px;
    }

    /* 登录按钮组 */
    .login {
        border: none;
        margin-right: 100px;
        text-align: center;
        line-height: 60px;
        float: right;
    }

</style>