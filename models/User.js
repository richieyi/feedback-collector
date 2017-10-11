const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Mongoose user schema
const userSchema = new Schema({
	googleId: String
});

// Create Mongo 'users' collection using userSchema
mongoose.model('users', userSchema);
