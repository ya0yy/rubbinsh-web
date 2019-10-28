<!-- 首页布局 -->
<template>
    <div>
        <el-row>
            <el-col style='background-image: url("http://localhost:8080/img/56681572258151_.pic_hd.jpg");background-size: 100%;background-repeat: no-repeat; height: 1080px'>
                <div style="background-color: black; max-width: 768px; height: 40px; margin:0 auto; color: white; border-radius: 10px; text-align: center;">
                    <el-input class="el-input-lucency" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21" />
                </div>
                <div :style="{'margin-top': $store.getters.getCliWidth <= 768 ? '80px' : '300px'}">
                    <el-row type="flex" class="row-bg">
                        <el-col :span="6" :xs="{span: 0, offset: 0}"/>
                        <el-col :span="12" :xs="{span: 24, offset: 0}">
                            <div style="text-align: left">
                                <h1>把最好的资源*，以最快的速度分享给大家！</h1>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="margin-top: 10px">
                    <el-row type="flex" class="row-bg">
                        <el-col :span="6" :xs="{span: 0, offset: 0}"/>
                        <el-col :span="6" :xs="{span: 24, offset: 0}">
                            <div style="text-align: left">
                                <p><sup>为了增强普通会员特权，从07月26号起，所有资源更新将不在对外提供百度云盘下载链接，

                                    只提供给普通会员！当然，非会员我们也会提供更多的免费资源供大家下载！

                                    再次谢谢您的理解和支持！进一步了解</sup></p>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <div>
            </div>
        </el-row>
        <!-- 第一行  gutter：每列的间隔 -->
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
    import hotPost from '../components/index/hotPost.vue'
    import carousel from '../components/index/carousel.vue'

    export default {
        created() {

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