const mongoose = require('mongoose');
const { Schema } = mongoose;

// Subdocument collection of Survey
const recipientSchema = new Schema({
	email: String,
	responded: { type: Boolean, default: false }
});

// Export because it is a subdocument collection of Survey
module.exports = recipientSchema;
