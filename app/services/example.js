const api = require('./api')

module.exports = {
    exampleGet(parameter){
        return api.get("api/"+parameter)
    },
}