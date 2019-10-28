<template>
    <div class="navDiv" :style="{'background-color' : embg}">
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
                :mode="$store.getters.getCliWidth >= 768 ? 'horizontal' : 'vertical'"
                :default-active="'/'"
                :background-color="embg"
                text-color="white"
                active-text-color="#ffd04b"
                router="true"
                @mouseenter.native="embg=enterColor"
                @mouseleave.native="embg=leaveColor"

        >
            <!-- 当浏览器宽度大于768时显示pc端导航栏 -->
            <template v-if="$store.getters.getCliWidth > 768">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item v-for="item in navBar_menu" :index="item.index">{{item.name}}</el-menu-item>
                <li class="login" v-if="!$store.getters.getUser.uid">
                    <a href="/create_account.html"><el-button type="success">注册</el-button></a>
                    <el-button type="primary" @click="loginVisible = !loginVisible">登录</el-button>
                </li>

                <li class="login" v-if="$store.getters.getUser.uid">
                    我已经登录了
                </li>
            </template>

            <!-- 当浏览器宽度小于768时显示适配于移动端的导航栏 -->
            <el-submenu index="2" v-if="$store.getters.getCliWidth <= 768">
                <template slot="title">我的工作台</template>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item v-for="item in navBar_menu" :index="item.index">{{item.name}}</el-menu-item>
                <li v-if="$store.getters.getUser.uid" class="el-menu-item" @click="loginVisible = !loginVisible">登录</li>
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
                enterColor: 'black',
                leaveColor: '#dabcbf',
                embg: '',

                loginVisible: false
            }
        },
        methods: {
        },
        directives: {
            // 自定义指令
            navBarCss: {
                inserted: (el, xx, vnode) => {
                    // todosomething
                }
            }
        },
        components: {login},
        mounted() {
            this.embg = this.leaveColor
        }
    }
</script>

<style scoped>
    /* 导航菜单居中 */
    .el-menu--horizontal {
        display: inline-block;
    }

    /*导航圆角*/
    .el-menu, .el-submenu {
        border-right: none;
        padding: 0 10px 0 10px;
        border-radius: 10px;
    }

    /* 导航菜单去除下边线 */
    .el-menu.el-menu--horizontal {
        border-bottom: none;
    }

    /*导航圆角*/
    .navDiv {
        border-bottom: solid 1px #e6e6e6;
        width: 100%;
        /*height: 61px;*/
        padding: 0 10px 0 10px;
        border-radius: 10px;
        text-align: center;
    }

    /* 登录按钮组 */
    .login {
        border: none;
        text-align: center;
        line-height: 60px;
        float: left;
    }

</style>