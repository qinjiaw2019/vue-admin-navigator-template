
const port = process.env.port || process.env.npm_config_port || 3600 // dev port
module.exports = {


    lintOnSave: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
          warnings: false,
          errors: true
        },
        // before: require('./mock/mock-server.js')
      },
}