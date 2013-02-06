var generatorFactory = function(){
    var id = 0;
    return function(){
	return id++;
    }
}

var Repository = function(){
    var store = [];
    var generator = generatorFactory();
   

    this.createUser = function(name){
	var user = {
	    "id" : generator(),
	    "name" : name
	};
	store.push(user);
	return user;
    };

    this.users = function(){
	return store;
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