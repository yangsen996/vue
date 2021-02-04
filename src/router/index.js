//配置
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
//懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
// 1通过vue.use(插件)
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path: '',
        //重定向
        redirect: '/home'
    },
    {
        path: '/home',
        component:Home,
        children: [
            {
                path: '',
                redirect: 'news'
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component:About
    },
    {
        path: '/user/:userId',
        component: User
    }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass:'active'
})

//将router对象传入vue实例
export default router