<!-- 首页布局 -->
<template>
    <div><!-- 第一行  gutter：每列的间隔 -->
        <el-row :gutter="20">
            <el-col :xl="{span: 6, offset: 4}" :lg="{span: 11, offset: 0}" :sm="{span: 24, offset: 0}">
                <carousel></carousel>
            </el-col>
            <el-col :xl="10" :lg="13" :sm="{span: 24}">
                <hotPost></hotPost>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row>
            <el-col :xl="{span: 16, offset: 4}" :sm="{span: 24, offset: 0}">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // 页面模块引入
    import hotPost from './components/index/hotPost.vue'
    import carousel from './components/index/carousel.vue'

    export default {
        created() {
            this.$axios.post('http://localhost:8081', {'hello': 'k'})
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        data() {
            return {}
        },
        methods: {},
        components: {hotPost, carousel}

    }
</script>

<style scoped>

    /* 每一列，圆角 */
    .el-col {
        margin-top: 20px;
        /*border-radius: 10px;*/
    }

</style>