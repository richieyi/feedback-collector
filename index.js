const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// Require authRoutes object and pass in app
require('./routes/authRoutes')(app);

// Dynamic port for heroku deployments
const PORT = process.env.PORT || 5000;
app.listen(PORT);
