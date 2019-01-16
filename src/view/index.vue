<template>
    <el-row :gutter="20">

        <el-col :span="6" offset="3">
            <div class="grid-content bg-purple">
                <div style="width: 100%; ">
                    <div style="width: 400px; margin:50px auto 0px auto; ">
                        <el-carousel :interval="4000" height="300px">
                            <el-carousel-item v-for="item in 5" :key="item">
                                <img src="../img/test.jpg" alt="实例图片" width="400">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <div style="width: 100%; ">
                    <div style="width: 400px; margin:50px auto 0px auto; ">

                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
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
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>