<template>
    <div>
        <el-row>
            <el-col :lg="{span: 3, offset: 4}" :sm="{span: 24, offset: 0}">
                <div class="grid-content bg-purple-dark">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            router="true"
                    >
                        <el-menu-item v-for="item in user_menu" :index="item.index">
                            <i :class="'icon iconfont ' + item.icon"></i>
                            <span>{{item.name}}</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :lg="{span: 13, offset: 0}" :sm="{span: 24, offset: 0}">
                <div class="grid-content bg-purple-dark">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        created() {
            this.$router.push("/user/profile");
        },
        data() {
            return {
                user_menu: [
                    {index: {name: 'user_profile'}, icon :"icon-shenfenzheng", name: "个人资料"},
                    {index: {name: 'user_post'}, icon :"icon-tiezi", name: "我的帖子"},
                    {index: {name: 'user_favorite'}, icon :"icon-shoucang", name: "我的收藏"},
                    {index: {name: 'user_security'}, icon :"icon-anquanzhongxinon", name: "安全中心"},
                ]
            }
        }
    }
</script>

<style scoped>
    /* 侧栏菜单圆角 */
    .el-menu {
        border-radius: 10px;
    }
</style>