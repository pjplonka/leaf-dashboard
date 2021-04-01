const context = require.context('./modules', true, /i18n.js$/i);

export default context.keys().map(context).flatMap(module => module.default);
