import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home'
import DcHeros from './pages/DcHeros'
import Calender from './pages/Calender'
import Markdown from './pages/Markdown'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import ReuseableModal from './pages/ReuseableModal'
import UserCrud from './pages/UserCrud'
import Chat from './pages/Chat'
import store from './store/index'

const routes = [
    { path:'/', component:Home},
    { path:'/dc-heros',     component:DcHeros},
    { path:'/calendar',     component:Calender},
    { path:'/markdown',     component:Markdown},
    { path:'/slider',       component:Slider},
    { path:'/calculator',   component:Calculator},
    { path:'/modal',        component:ReuseableModal},
    { path:'/chat',         component:Chat, meta: { middleware: "auth" }},
    { path:'/user-crud',    component:UserCrud},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if(to.meta.middleware){
        const middleware = require(`./middleware/${to.meta.middleware}`);
        if(middleware){
            middleware.default(next, store);
        } else{
            next();
        }
    }else{
        next();
    }
})

export default router;