import App from "@/applications/Public/App";
import Home from "@/applications/Public/views/Home";
import Login from "@/applications/Public/views/Login";
import Register from "@/applications/Public/views/Register";
import PageNotFound from "@/applications/Public/views/PageNotFound";

export default {
    path: '/',
    component: App,
    children: [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: 'about',
            name: 'About',
            component: () => import('./views/About.vue')
        },
        {
            path: 'login',
            name: 'Login',
            component: Login
        },
        {
            path: 'register',
            name: 'Register',
            component: Register
        },
        {
            path: "*",
            component: PageNotFound
        }
    ]
};
