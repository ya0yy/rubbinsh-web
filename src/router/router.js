// 路由规则定义
import VueRouter from "vue-router";

export default new VueRouter({
    routes: [
        {path: '/', redirect: '/index'},
        {path: "/index", component: () => import('../view/page/index.vue'), name: "index"},
        {path: "/test", component: () => import('../view/page/test.vue'), name: "test"},
        {
            path: "/user", component: () => import('../view/page/user.vue'), name: "user",
            children: [
                {path: 'profile', component: () => import('../view/page/user/profile.vue'), name: "user_profile"},
                {path: 'favorite', component: () => import('../view/page/user/favorite.vue'), name: "user_favorite"},
                {path: 'post', component: () => import('../view/page/user/post.vue'), name: "user_post"},
                {path: 'security', component: () => import('../view/page/user/security.vue'), name: "user_security"},
            ]
        },
    ]
});