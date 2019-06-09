<template>
    <el-dialog
            :visible="loginVisible"
            width="30%"
            :before-close="handleClose"
            :fullscreen="$store.getters.getCliWidth <= 768"
    >
        <span>
            <img src="../../../img/logo.png" alt="" width="50" style="margin-bottom: 50px"
                 v-if="$store.getters.getCliWidth > 768">
            <img src="../../../img/backgroud1-2.gif" alt="" width="300">
            <el-input v-model="username" placeholder="用户名 邮箱 手机号" minlength="3" autofocus="true"></el-input>
            <span style="height: 20px; display: block"></span>
            <el-input v-model="password" placeholder="请输入密码" type="password" minlength="3"></el-input>
            <div style="color : red; margin-top: 20px">&nbsp; {{msg}} &nbsp;</div>
        </span>
        <span slot="footer" class="dialog-footer" style="width: 100%">
            <el-button @click="showLogin" class="quxiao" round>取 消</el-button>
            <el-button type="primary" @click="doLogin" class="denglu" round>登 录</el-button>
            <p style="text-align: center">
                <a href="#" title="使用百度账号登录" class="logo">
                    <svg class="icon" aria-hidden="true" font-size="40px"><use xlink:href="#icon-icon_baidulogo"/></svg>
                </a>
                <a href="#" title="使用支付宝登录" class="logo">
                    <svg class="icon" aria-hidden="true" font-size="40px"><use
                            xlink:href="#icon-zhifubaorenzheng"/></svg>
                </a>
            </p>
        </span>
    </el-dialog>
</template>

<script>
    import UserApi from '../../../api/user/UserApi'

    export default {
        mounted() {
        },
        data() {
            return {
                username: '',
                password: '',
                msg: ''
            }
        },
        methods: {
            // 登录
            doLogin() {
                let userApi = new UserApi();
                // 获取授权码
                userApi.getAuthorizeCode(this.username, this.password)
                    .then((response) => {
                        try {
                            // 转换失败说明登录成功（登录失败后台返回一个包含错误信息的json，成功则直接返回获取token的地址）
                            let json = eval('(' + response.data + ')');
                            this.msg = json.msg
                        } catch (e) {
                            // 如果上面将字符串转为json失败就回进入catch块
                            // 获取token
                            userApi.getToken(response.data).then(tokenResp => {
                                if (tokenResp.data.status) {
                                    this.showLogin()
                                    this.$store.commit('setUser', {hello:'js'})
                                    console.log(this.$store.state.user)
                                } else {
                                    this.msg = "错误"
                                }
                            }).catch(error => {
                                console.error(error)
                            })
                        }

                    })
                    .catch((error) => {
                        console.error(error)
                    });
            },
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

    /* 去除登录框的内边距 */
    .el-dialog__body {
        padding: 15px 1px;
    }

    /* 输入框样式 */
    .el-dialog__body > span > .el-input > .el-input__inner {
        width: 75%;
        border-radius: 10px;
        height: 50px;
    }

    /* 隐藏关闭按钮 */
    .el-dialog__close {
        display: none;
    }

    /* 按钮样式 */
    .quxiao, .denglu {
        width: 25%;
        height: 40px;
    }

    /* 社交登录图标样式 */
    .logo {
        padding-left: 10px;
        padding-right: 10px;
    }

    /* 按钮居中 */
    .el-dialog__footer {
        text-align: center !important;
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