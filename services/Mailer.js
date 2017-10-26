const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// Create Mailer class and extend Mail class inside helper library
class Mailer extends helper.Mail {
	// Param 1 is an object with 'subject' and 'recipients' properties
	// Param 2 is the content of object's 'body' property
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
		this.from_email = new helper.Email('no-reply@feedbackcollector.com');
		this.subject = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.formatAddresses(recipients);

		// addContent function comes from Mail class
		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	// Format addresses for sendgrid
	formatAddresses(recipients) {
		// Pull off email prop from recipients array
		return recipients.map(({ email }) => {
			// Format email with Email helper and return
			return new helper.Email(email);
		});
	}

	// Track clicks with sendgrid magic
	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}

	// Take and process list of recipients
	addRecipients() {
		const personalize = new helper.Personalization();

		// Iterate over list of recipients
		this.recipients.forEach(recipient => {
			// Add each recipients to personalize object
			personalize.addTo(recipient);
		});

		// Add entire personalize object
		this.addPersonalization(personalize);
	}

	// Take Mailer and send to sendgrid
	async send() {
		// Create sendgrid API request
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		});

		const response = this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
