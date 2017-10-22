const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Handle any requests with request body
app.use(bodyParser.json());

// Make use of cookies inside our app
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
app.use(
	cookieSession({
		maxAge: THIRTY_DAYS,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Require routes and pass into app
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// Runs only in production
if (process.env.NODE_ENV === 'production') {
	// Express will serve up prod assets like main.js or main.css
	app.use(express.static('client/build'));

	// Express will serve up index.html file if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Dynamic port for heroku deployments
const PORT = process.env.PORT || 5000;
app.listen(PORT);
