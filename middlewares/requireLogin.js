module.exports = (req, res, next) => {
	if (!user) {
		// 401 === unauthorized
		return res.status(401).send({ error: 'You must log in!' });
	}

	// next is called when middleware is complete and passes onto next middleware
	next();
};
