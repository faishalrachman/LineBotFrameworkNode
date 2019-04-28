const text = require('../template/text')

function handleMessage(client, event, baseURL) {
    var pesan = event.message.text
    var split_space = pesan.split(' ')

    if (event.message.type == 'text') {


    }

    const sample = {"type" : "text","text":"example"}
    return client.replyMessage(event.replyToken, text.greeting())
}

module.exports = handleMessage