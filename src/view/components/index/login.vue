<template>
    <el-dialog
            :visible="loginVisible"
            width="30%"
            :before-close="handleClose"
            :fullscreen="$store.state.cliWidth <= 768"
    >
        <span>
            <img src="../../../img/logo.png" alt="" width="50" style="margin-bottom: 50px" v-if="$store.state.cliWidth > 768">
            <img src="../../../img/backgroud1-2.gif" alt="" width="300">
            <el-input v-model="input" placeholder="用户名 邮箱 手机号" minlength="3" autofocus="true"></el-input>
            <span style="height: 20px; display: block"></span>
            <el-input v-model="input" placeholder="请输入密码" type="password" minlength="3"></el-input>
        </span>
        <span slot="footer" class="dialog-footer" style="width: 100%">
            <el-button @click="showLogin" class="quxiao" round>取 消</el-button>
            <el-button type="primary" @click="showLogin" class="denglu" round>登 录</el-button>
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
    .el-dialog__body > span > .el-input > .el-input__inner {
        width: 75%;
        border-radius: 10px;
        height: 60px;
    }

    /* 隐藏关闭按钮 */
    .el-dialog__close {
        display: none;
    }

    /* 按钮样式 */
    .quxiao, .denglu {
        width: 40%;
        height: 50px;
    }

    /* 按钮居中 */
    .el-dialog__footer {
        text-align: center;
    }

    /* 登录框标题 */
    .el-dialog__title {
        font-size: 50px;
    }

    /* 去掉登录框的head，不然上面会显得很长 */
    .el-dialog__header {
        display: none;
    }
</style>