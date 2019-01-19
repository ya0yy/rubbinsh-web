<!-- 走马灯（轮播图） -->
<template>
    <div class="grid-content bg-purple">
        <el-carousel :interval="4000" height="300px">
            <el-carousel-item v-for="item in 5" :key="item">
                <img src="../../img/test.jpg" alt="实例图片" width="455">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        created() {

        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .el-carousel__item {
        border-radius: 10px;
    }
</style>