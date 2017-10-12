const passport = require('passport');

module.exports = app => {
	// Authenticate user using Google strategy above
	app.get(
		'/auth/google',
		// Scope tells Google what info to return
		passport.authenticate('google', { scope: ['profile', 'email'] })
	);

	// Redirect user to server
	app.get('/auth/google/callback', passport.authenticate('google'));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
