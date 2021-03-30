import App from "@/applications/Admin/App";
import PageNotFound from "@/applications/Admin/views/PageNotFound";

const context = require.context('./modules', true, /routes.js$/i);
const modulesRoutes = context.keys().map(context).flatMap(module => module.default);

export default {
    path: '/admin',
    component: App,
    meta: {requiresAuth: true},
    children: [
        ...modulesRoutes,
        {
            path: "*",
            component: PageNotFound
        }
    ]
};
