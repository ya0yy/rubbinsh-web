<template>
    <div id="app">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#354259"
                        text-color="white"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
    export default {
        created() {
        },
        data: () => {

        }
    }
</script>
<style scoped>
    .el-header, .el-footer {
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    #app {
        background: url(../img/index_bg.png) no-repeat;
        background-color: #354259;
        height: 1202px;
    }
</style>