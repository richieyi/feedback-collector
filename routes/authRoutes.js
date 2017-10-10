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
};
