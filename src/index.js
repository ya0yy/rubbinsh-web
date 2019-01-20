import Vue from 'vue/dist/vue.min'
import VueRouter from 'vue-router'
import axios from 'axios/dist/axios'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css/animate.css'
import main from './view/main.vue';
import Vuex from 'vuex/dist/vuex';

// 注册自定义全局组件
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// 注册组件
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Vuex);

// 路由规则定义
const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/index'},
        {path: "/index", component: () => import('./view/index.vue'), name: "index"},
        {path: "/test", component: () => import('./view/router/test.vue'), name: "test"},
        {path: "/user", component: () => import('./view/router/user.vue'), name: "user",
            children: [
                {path: 'profile', component: () => import('./view/router/user/profile.vue'), name: "user_profile"},
                {path: 'favorite', component: () => import('./view/router/user/favorite.vue'), name: "user_favorite"},
                {path: 'post', component: () => import('./view/router/user/post.vue'), name: "user_post"},
                {path: 'security', component: () => import('./view/router/user/security.vue'), name: "user_security"},
            ]
        },
    ]
});

// vuex
const store = new Vuex.Store({
    state: {
        count: 0,
        // 浏览器宽度
        cliWidth: document.body.clientWidth
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

new Vue({
    el: "#app",
    mounted() {
        // 监听浏览器大小变化，将宽度实时赋值给vuex的cliWidth
        window.onresize = () => {
            return (() => {
                this.$store.state.cliWidth = document.body.clientWidth
            })()
        }
    },
    created() {
        console.log("hello");
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