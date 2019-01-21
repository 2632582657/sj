'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: 'http://www.xiaoqiaojr.cn',   //线上请求前缀
}
