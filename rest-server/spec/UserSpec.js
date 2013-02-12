var assert = require("assert");
var User = require("../lib/User");

describe("User", function(){
    var expectedName = "walter";
    var expectedSender = "daan";
    var expectedContent = "Walter, come here I want to see you";

    it("should created with an name", function(){
	var user = new User(expectedName);

	assert.equal(user.name, expectedName)
    });

    it("should be possible to post a message to a user", function(){
	var user = new User(expectedName);

	var message = user.postMessage(expectedSender, expectedContent);

	assert.ok(message.id != undefined);
	assert.equal(message.sender, expectedSender);
	assert.equal(message.content, expectedContent);
    });

    it("should be possible to retrieve a message", function(){
	var user = new User(expectedName);
	var id = user.postMessage(expectedSender, expectedContent).id;
	user.postMessage("?", "?");

	var message = user.findById(id);

	assert.ok(message != undefined);
	assert.equal(message.sender, expectedSender);
	assert.equal(message.content, expectedContent);
    })
    
    describe("Message", function(){
	it("should have incremental ids", function(){
	    var user = new User(expectedName);

	    var first = user.postMessage(expectedSender, expectedContent);
	    var second = user.postMessage(expectedSender, expectedContent);

	    assert.notEqual(first.id, second.id);
	});
	
    });
});