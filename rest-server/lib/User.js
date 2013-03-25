var generator = require("./generatorFactory")();

var User = function(name){
    var messages = [];

    this.name = name;
    
    this.messages = function(){
	    return messages;
    };

    this.postMessage = function(sender, content) {
        var now = new Date();
        var message = {
            id : generator(),
            timestamp: now.toString(),
            sender : sender,
            content : content
        }
	    messages.push(message);
	    return message;
    };

    this.findById = function(messageId) {
        for (var index = 0; index < messages.length; index++){
            if (messages[index].id === messageId) {
            return messages[index];
            }
        }
        return undefined;
    }
}

module.exports = User;