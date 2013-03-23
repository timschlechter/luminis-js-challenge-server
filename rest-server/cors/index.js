/**
 * allow cors on all requests
 */

var allow = function() {
	return function(req, res, next) {
		res.set('Access-Control-Allow-Origin', '*');
		res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
		res.set('Access-Control-Allow-Headers', 'Content-Type');
		next();
	}
}

module.exports = {
		allow : allow
}