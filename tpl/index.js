const k = require('_k_')
const Koa = require('koa')
const app = new Koa()
const config = require(process.cwd() + '/app/config.js')


k(app, config).listen(3000)

