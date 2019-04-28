const axios = require('axios')

module.exports = axios.create({
    baseURL: "http://google.com",
    timeout: 60000
  })