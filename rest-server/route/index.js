var generatorFactory = function(){
    var id = 0;
    return function(){
	return id++;
    }
}

var User = function(id, name){
    var messages = [];
    var generator = generatorFactory();

    this.id = id;
    this.name = name;
    
    this.messages = function(){
	return messages;
    };

    this.postMessage = function(sender, content) {
	var message = {
	    id : generator(),
	    sender : sender,
	    content : content
	}
	messages.push(message);
	return message;
    }
}

var Repository = function(){
    var store = [];
    var generator = generatorFactory();
   

    this.createUser = function(name){
	var user = new User(generator(), name);
	store.push(user);
	return user;
    };

    this.users = function(){
	return store;
    }

    this.findByName = function(targetName){
	for (var index = 0; index < store.length; index++) {
	    if (store[index].name === targetName) {
		return store[index];
	    }
	}
	return undefined;
    }
};

var repo = new Repository;

exports.allUsers = function(req, res) {
    res.json(repo.users());
}

exports.createUser = function(req, res) {
    var name = req.body.name;
    if (name) {
	res.json(repo.createUser(req.body.name));
    } else {
	res.json(500, { 
	    message : "no name"
	})
    }
}

exports.retrieveUser = function(req, res, next, userName) {
    var user = repo.findByName(req.params.userName);
    if (user) {
	req.user = user;
	next();
    } else {
	res.json(404,{});
    }
}

exports.listAllMessages = function(req, res) {
    res.json(req.user.messages());
}

exports.createMessage = function(req, res) {
    var message = req.user.postMessage(req.body.sender,req.body.content);
    res.json(message);
}