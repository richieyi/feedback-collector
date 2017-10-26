const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// Create Mailer class and extend Mail class inside helper library
class Mailer extends helper.Mail {
	// Param 1 is an object with 'subject' and 'recipients' properties
	// Param 2 is the content of object's 'body' property
	constructor({ subject, recipients }, content) {
		super();

		this.from_email = new helper.Email('no-reply@feedbackcollector.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);
	}
}

module.exports = Mailer;
