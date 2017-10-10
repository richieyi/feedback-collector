const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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
			console.log('refresh', refreshToken);
			console.log('profile', profile);
		}
	)
);
