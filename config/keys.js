// Figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	// In prod - return prod keys
	module.exports = require('./prod');
} else {
	// In dev - return dev keys
	module.exports = require('./dev');
}
