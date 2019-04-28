const text = require('../template/text')
const flow = require('../dialog/basic')

function handleMessage(client, event, baseURL) {
    var pesan = event.message.text
    var userId = event.source.userId
    var replyToken = event.replyToken
    var split_space = pesan.split(' ')

    if (event.message.type == 'text') {
        if (pesan == "menu") {
            return client.replyMessage(replyToken,text.menu)

        } else {
            return flow.mainFlow(client,userId,event.replyToken,pesan)
        }

    }

    const sample = {
        "type": "text",
        "text": "example"
    }
    return client.replyMessage(event.replyToken, text.greeting)
}

module.exports = handleMessage