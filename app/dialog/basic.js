const sess = require("store2")
const text = require('../template/text')
module.exports = {
    getStatus(userId) {
        return sess.get(userId)
    },
    mainFlow(client, userId, replyToken, message) {
        var current = sess.get(userId)
        switch (current) {
            case null:
                sess.set(userId, "start", true)
                return client.replyMessage(replyToken,text.greeting)
                
            case "start":
                sess.set(userId,"finish_register",true)
                console.log("Namanya : "+message)
                return client.replyMessage(client.replyMessage(replyToken,text.finishRegister))
        }
    }

}