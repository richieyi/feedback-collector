module.exports = survey => {
	// Take survey and return string that represents HTML we want to show
	return `
		<html>
			<body>
				<div style="text-align: center;">
					<h3>We would love your feedback!</h3>
					<p>Please answer the following question:</p>
					<p>${survey.body}</p>
					<div style="display: flex;">
						<div>
							<a href="http://localhost:3000">Yes</a>
						</div>
						<div>
							<a href="http://localhost:3000">No</a>
						</div>
					</div>
				</div>
			</body>
		</html>
	`;
};
