module.exports = (req, res, next) => {
	if (req.user.credits < 1) {
		return res
			.status(403) // 403 === forbidden
			.send({ error: 'Not enough credits!' });
	}

	next();
};
