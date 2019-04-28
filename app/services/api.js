const axios = require('axios')
const constants = require('../constants')

module.exports = axios.create({
    baseURL: constants.baseURL,
    timeout: 5000
  })