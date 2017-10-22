const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
	// Handle post request from client side to this url
	app.post('/api/stripe', (req, res) => {
		console.log(req.body);
	});
};
