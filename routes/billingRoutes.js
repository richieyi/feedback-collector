const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	// Handle post request from client side to this url
	app.post('/api/stripe', requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5.00 for 5 credits',
			// req.body is returned from body-parser
			source: req.body.id
		});

		// Update User's credits and save
		req.user.credits += 5;
		const user = await req.user.save();

		// Send updated User back to client
		res.send(user);
	});
};
