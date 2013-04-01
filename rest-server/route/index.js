var Repository = require("../lib/Repository"),
	http = require("http"),
	jsxml = require("jsxml");

var repo = new Repository();

exports.queryWolframAlpha = function(req, res) {
	var result = "",
		url = 'http://api.wolframalpha.com/v1/query?input=' + req.params.query + '&appid=' + req.params.appid;

	var request = http.get(url, function(response) {
		response.on('data', function (chunk) {
			result += chunk;
		});

		response.on('end', function () {
			res.json(jsxml.fromXml(result));
		});
	});

    request.end();
};

exports.allUsers = function(req, res) {
    res.json(repo.users());
}

exports.createUser = function(req, res) {
    var name = req.body.name;
    if (name) {
	var user = repo.createUser(req.body.name);
	if (user) {
	    res.json(user);
	} else {
	    res.json(500, {
		message : "duplicate name"
	    })
	}
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

exports.showMessage = function(req, res) {
    res.json(req.message);
}

exports.retrieveMessage = function(req, res, next, messageId) {
    var message = req.user.findById(parseInt(messageId));
    if (message) {
	req.message = message;
	next();
    } else {
	res.json(404, {});
    }
    
}