var assert = require("assert");
var Repository = require("../lib/Repository");

describe("Repository", function(){
    var expectedName = "walter";

    it("should create a user", function(){
	var repo = new Repository();

	var user = repo.createUser(expectedName);

	assert.ok(user != undefined);
	assert.equal(user.name, expectedName);
    });

    it("should retrieve all users", function(){
	var repo = new Repository();
	repo.createUser("walter");
	repo.createUser("daan");

	var users = repo.users();

	assert.ok(users != undefined);
	assert.equal(users.length, 2);

    });

    it("should find user by name", function(){
	var repo = new Repository();
	repo.createUser(expectedName);
	repo.createUser("?");

	var user = repo.findByName(expectedName);

	assert.ok(user != undefined);
	assert.equal(user.name, expectedName);
    });

    it("should not find nonexisting user", function(){
	var repo = new Repository();
	repo.createUser(expectedName);

	var user = repo.findByName("schrodinger");

	assert.ok(user == undefined);
    });

    it("should not find nonexisting user", function(){
	var repo = new Repository();
	repo.createUser(expectedName);

	var user = repo.findByName("schrodinger");

	assert.ok(user == undefined);
    });

    it("should not be able to create duplicate user", function(){
	var repo = new Repository();
	repo.createUser(expectedName);
	var duplicate = repo.createUser(expectedName);

	assert.ok(duplicate == undefined);
    });

    
});