<template>
        <el-dialog
                title="登录"
                :visible="loginVisible"
                width="30%"
                :before-close="handleClose"
        >
        <span>
            <el-input v-model="input" placeholder="用户名 邮箱 手机号" minlength="3" autofocus="true"></el-input>
            <span style="height: 20px; display: block"></span>
            <el-input v-model="input" placeholder="请输入密码" type="password" minlength="3"></el-input>

        </span>
            <span slot="footer" class="dialog-footer">
            <el-button @click="showLogin">取 消</el-button>
            <el-button type="primary" @click="showLogin">登 录</el-button>
        </span>
        </el-dialog>
</template>

<script>
    export default {
        mounted() {
        },
        data() {
            return {}
        },
        methods: {
            // 调用父组件中的showLogin方法，修改登录框的显示标记
            showLogin() {
                this.$emit('showLogin');
            }
        },
        props: ["loginVisible"]
    }
</script>
<!-- 本页面启用scoped时css不生效，故使用全局style -->
<style>
    /* 登录框弹出时背景透明度 */
    .v-modal {
        opacity: .85;
    }

     /* 登录框圆角 */
    .el-header > div > .el-dialog__wrapper > .el-dialog {
        border-radius: 13px;
    }

    /* 输入框样式 */
    .el-dialog__body > span > .el-input > .el-input__inner{
        width: 75%;
        border-radius: 10px;
        height: 50px;
    }

    /* 隐藏关闭按钮 */
    .el-dialog__close {
        display: none;
    }
</style>