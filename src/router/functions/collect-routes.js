export const collectRoutes = () => {
  const context = require.context('@/modules', true, /routes.js$/i);

  return context.keys().
    map(context).
    flatMap(module => module.default);
};
