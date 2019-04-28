function makeText(text){
return {
    "type": "text",
    "text": text
  }
}

module.exports = {
    greeting(){
        return makeText("this is greeting message")
    }
}