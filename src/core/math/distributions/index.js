const context = require.context('.', false, /^.\/((?!index).+).js$/);

const names = context.keys();
const modules = names.map(context);

const functions = names.reduce((exports, key, i) => {
    const name = key.substr(2, 1).toUpperCase() + key.slice(3, -3)
    const { default: module } = modules[i];
    
    return { ...exports, [name]: module };
}, {});

export default functions;