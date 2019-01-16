<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        :background-color="embg"
                        text-color="white"
                        active-text-color="#ffd04b"
                        default-active="1"
                        @mouseenter.native="embg='black'"
                        @mouseleave.native="embg='transparent'"
                        router="true"
                >
                    <div style="float: left; width: 100px; color: red;">&nbsp;</div>
                    <el-menu-item index="/">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="test" disabled>消息中心</el-menu-item>
                    <el-menu-item index="test">test</el-menu-item>
                    <div style="float: right; margin-right: 100px; color: red;">
                        <h3>
                            <a href="#">登录</a>
                            &nbsp;|&nbsp;
                            <a href="#">注册</a>
                        </h3>
                    </div>
                </el-menu>
            </el-header>

            <el-main>
                <transition enter-active-class="animated zoomInDown" leave-active-class="animated slideOutDown" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>

            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
    export default {
        created() {
        },
        data() {
            return {
                height: '',
                embg: 'transparent'
            }
        },
        methods: {}
    }
</script>
<style scoped>
    .el-header, .el-footer {
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        color: #333;
        text-align: center;
    }

    #app {
        background: url(../img/index_bg.png) no-repeat;
        background-color: #354259;
        height: 1202px;
    }

</style>