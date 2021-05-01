module.exports = {
    devServer: {
        //tell dev server to send api requests to http://127.0.0.1:3000
        //so vue client can make these requests
        proxy: 'http://127.0.0.1:3000'
    }
}