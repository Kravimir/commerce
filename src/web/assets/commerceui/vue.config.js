module.exports = {
    filenameHashing: false,
    publicPath: 'http://localhost:8080/',
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        },
    },
    devServer: {
        headers: {"Access-Control-Allow-Origin": "*"},
        disableHostCheck: true
    },
    chainWebpack: config => {
        // Remove the standard entry point
        config.entryPoints.delete('app')

        // Add new entry points
        config
            .entry('app')
            .add('./src/app.js')
            .end()
            .entry('order-details-app')
            .add('./src/order-details-app.js')
            .end()
            .entry('order-meta-app')
            .add('./src/order-meta-app.js')
            .end()
    }
}