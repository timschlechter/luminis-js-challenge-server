/**
 * allow cors on all requests
 */

var allow = function() {
	return function(req, res, next) {
		res.set('Access-Control-Allow-Origin', '*');
		res.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST, OPTIONS');
		res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	}
}

module.exports = {
		allow : allow
}