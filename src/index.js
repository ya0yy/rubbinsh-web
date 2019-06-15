import Vue from 'vue/dist/vue.min';
import VueRouter from 'vue-router';
import qs from 'qs';
import ElementUI from 'element-ui';
import main from './view/page/main.vue';
import Vuex from 'vuex/dist/vuex';
import router from './router/router'
import UserApi from './api/user/UserApi'

import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css/animate.css';

// 注册自定义全局组件
Vue.prototype.$qs = qs;

// 注册组件
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);


// vuex
const store = new Vuex.Store({
    state: {
        // 浏览器宽度
        cliWidth: document.body.clientWidth,
        user: {}
    },
    getters: {
        getCliWidth: state => {
            return state.cliWidth
        },
        getUser: state => {
            return state.user
        }
    },
    mutations: {
        setCliWidth: (state, width) => {
            state.cliWidth = width
        },
        setUser: (state, user) => {
            state.user = user
        }
    }
})

let userApi = new UserApi()

new Vue({
    el: "#app",
    mounted() {
        // 监听浏览器大小变化，将宽度实时赋值给vuex的cliWidth
        window.onresize =
            () => {
                this.$store.commit("setCliWidth", document.body.clientWidth);
            }

    },
    created() {
        console.log("hello");
        userApi.getMyInfo().then(resp => {
            // this.$store.commit('setUser', resp.data.data)
        }).catch(error => {
            console.log(error)
        })
    },
    render: h => h(main),
    router,
    store
});

// 时间格式过滤器
Vue.filter("formatTime", function (value, type) {
    let dataTime = "";
    let data;
    if (isNaN(value)) {
        data = new Date(value);
    } else {
        data = new Date();
        data.setTime(value)
    }
    let year = data.getFullYear();
    let month = addZero(data.getMonth() + 1);
    let day = addZero(data.getDate());
    let hour = addZero(data.getHours());
    let minute = addZero(data.getMinutes());
    let second = addZero(data.getSeconds());
    if (type == "YMDHMS") {
        dataTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    } else if (type == "HMS") {
        dataTime = hour + ":" + minute + ":" + second;
    } else if (type == "YM") {
        dataTime = year + "-" + month;
    } else {
        dataTime = year + "-" + month + "-" + day;
    }
    return dataTime;
});

//元素的补零计算
function addZero(val) {
    if (val < 10) {
        return "0" + val;
    } else {
        return val;
    }
};