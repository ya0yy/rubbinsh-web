import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue/dist/vue.min'
import VueRouter from 'vue-router'
import axios from 'axios/dist/axios'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import index from './view/index.vue';

// 注册自定义全局组件
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;

// 页面懒加载导入
// const successVue = () => import('./view/success.vue');

// 注册组件
Vue.use(VueRouter);
Vue.use(ElementUI);

// 路由规则定义
/*const router = new VueRouter({
    routes: [
        {path: "/success", component: successVue}
    ]
});*/

new Vue({
    el: "#app",
    created() {
        console.log("hello");
    },
    render: h => h(index)
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