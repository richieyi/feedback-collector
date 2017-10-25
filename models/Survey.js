const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

// Create Mongoose survey schema
const surveySchema = newSchema({
	title: String,
	body: String,
	subject: String,
	// Array of Recipient schema records
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	// Every Survey belongs to a User: one-to-many relationship
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
	dateSent: Date,
	lastResponded: Date
});

// Create Mongo 'surveys' collection using surveySchema
mongoose.model('surveys', surveySchema);
