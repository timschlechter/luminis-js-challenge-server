var factory = function(){
    var id = 0;
    return function(){
	return id++;
    }
}

module.exports = factory;
