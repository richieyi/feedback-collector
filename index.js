const express = require('express');
require('./services/passport');

const app = express();

// Require authRoutes object and pass in app
require('./routes/authRoutes')(app);

// Dynamic port for heroku deployments
const PORT = process.env.PORT || 5000;
app.listen(PORT);
