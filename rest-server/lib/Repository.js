var User = require("./User");

var Repository = function(){
    var store = [];

    this.createUser = function(name){
	if (this.findByName(name) == undefined) {
	    var user = new User(name);
	    store.push(user);
	    return user;
	}
	return undefined;
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

module.exports = Repository;