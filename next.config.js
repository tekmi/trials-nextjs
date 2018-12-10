const withCSS = require('@zeit/next-css');


module.exports = withCSS({
    distDir: 'build',
    serverRuntimeConfig: { // Will only be available on the server side
        mySecret: 'secret'
    },
    publicRuntimeConfig: { // Will be available on both server and client
        staticFolder: '/static',
    },


    cssModules: true,
    cssLoadedOptions: {
        localIdentName: '[name]__[local]__[hash:base64:5]'
    }
});