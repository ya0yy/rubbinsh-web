<!-- 应用的主体结构，头，主体，尾部 -->
<template>
    <div id="app">
        <el-container>
            <!-- 头 -->
            <el-header height="auto">
                <navBar></navBar>
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
            <el-footer>
                我是版权信息
            </el-footer>

        </el-container>
    </div>
</template>

<script>
    import navBar from '../components/index/navBar.vue'

    export default {
        created() {
        },
        components: {navBar}
    }
</script>

<style scoped>
    .el-header, .el-footer, .el-main {
        text-align: center;
    }

    /*背景图*/
    #app {
        background: url(../../img/index_bg.png) no-repeat;
        background-color: #f8ffd2;
        height: 1202px;
    }

</style>
