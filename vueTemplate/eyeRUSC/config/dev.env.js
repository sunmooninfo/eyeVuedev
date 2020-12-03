'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
  , BASE_URI: '"http://192.168.1.14:8095/cms"'
})
