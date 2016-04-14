const context = require.context('.', false, /^.\/((?!index).+).js$/);

const modules = context.keys().map(context);

const functions = modules.reduce((exports, { default: module }) => {
    return { ...exports, [module.name]: module };
}, {});

export default functions;