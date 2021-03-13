export default class SidebarProvider {
    static get() {
        const context = require.context('@/modules', true, /menu.js$/i);

        return context.keys().map(context).flatMap(module => module.default);
    }
}
