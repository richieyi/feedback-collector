// Email regex
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Email validation
export default emails => {
	const invalidEmails = emails
		.split(',') // split by comma
		.map(email => email.trim()) // remove leading/trailing whitespace
		.filter(email => re.test(email) === false); // return invalid emails

	if (invalidEmails.length) {
		return `These emails are invalid: ${invalidEmails}`;
	}

	return;
};
