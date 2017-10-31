const keys = require('../../config/keys');

module.exports = survey => {
	// Take survey and return string that represents HTML we want to show
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h3>We would love your feedback!</h3>
					<p>Please answer the following question:</p>
					<p>${survey.body}</p>
					<div>
						<div>
							<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
						</div>
						<div>
							<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
						</div>
					</div>
				</div>
			</body>
		</html>
	`;
};
