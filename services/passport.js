const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Pull User model out of Mongoose
const User = mongoose.model('users');

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
			// Find possible existing user in DB
			User.findOne({ googleId: profile.id }).then(existingUser => {
				// We already have a record with given ID
				if (existingUser) {
					done(null, existingUser);
				}
				// We don't have a record with this ID
				new User({
					googleId: profile.id
				})
					// Save new user to Mongo
					.save()
					.then(user => done(null, user));
			});
		}
	)
);
