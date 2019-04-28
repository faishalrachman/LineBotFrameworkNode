function makeText(text){
return {
    "type": "text",
    "text": text
  }
}

module.exports = {
    greeting:  makeText("this is greeting message, please input name"),
    finishRegister: makeText("thank you for inputting your name"),
    menu: makeText("ini adalah menu"),
}