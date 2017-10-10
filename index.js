const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

// Tell Passport to use Google oauth strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		// Do something with received access token
		(accessToken, refreshToken, profile, done) => {
			console.log('access', accessToken);
			console.log('refrehs', refreshToken);
			console.log('profile', profile);
		}
	)
);

// Authenticate user using Google strategy above
app.get(
	'/auth/google',
	// Scope tells Google what info to return
	passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Redirect user to server
app.get('/auth/google/callback', passport.authenticate('google'));

// Dynamic port for heroku deployments
const PORT = process.env.PORT || 5000;
app.listen(PORT);
