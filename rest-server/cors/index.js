/**
 * allow cors on all requests
 */

var allow = function() {
	return function(req, res, next) {
		res.set('Access-Control-Allow-Origin', '*');
		next();
	}
}

module.exports = {
		allow : allow
}