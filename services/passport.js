const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// Pull User model out of Mongoose
const User = mongoose.model('users');

// Allows us to take User and generate unique piece of info from it and pass to cookie
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Search user collection by id and turn back into User
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// Tell Passport to use Google oauth strategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			// Find possible existing user in DB
			const existingUser = await User.findOne({ googleId: profile.id });
			// We already have a record with given ID
			if (existingUser) {
				return done(null, existingUser);
			}

			// We don't have a record with this ID
			const newUser = await new User({
				googleId: profile.id
			}).save();
			// Save new user to Mongo
			done(null, newUser);
		}
	)
);
