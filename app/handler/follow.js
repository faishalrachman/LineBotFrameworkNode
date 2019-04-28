const util = require('util')
function handle(client, event) {
    var userId = event.source.userId
    client.getProfile(userId).then(
        (profile) => {
            var name = profile.displayName
            var message = util.format("Halo %s, perkenalkan aku Reco sebagai asisten investasi saham kakak ^^ ada yang bisa Reco bantu ? ",name)
            var textMessage = {
                type: "text",
                text : message
            }
            return client.replyMessage(event.replyToken,textMessage)
        }
    )
}

module.exports = handle