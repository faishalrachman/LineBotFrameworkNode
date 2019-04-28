var dummy = 'Uf790201a339131de8f815ca74ebc69a0'
const flex = require('../template/flex')
const text = require('../template/text')
const api = require('../services/example')

function handleMessage(client, event, baseURL) {
    var pesan = event.message.text
    var split_space = pesan.split(' ')

    if (event.message.type == 'text') {


    }

    const sample = {"type" : "text","text":"example"}
    return client.replyMessage(event.replyToken, sample)
}

module.exports = handleMessage