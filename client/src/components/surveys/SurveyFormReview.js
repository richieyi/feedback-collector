import React from 'react';

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ onCancel }) => {
	return (
		<div>
			<h5>Please confirm your entries.</h5>
			<button
				className="yellow darken-3 btn-flat white-text"
				onClick={onCancel}
			>
				Back
				<i className="material-icons right">backspace</i>
			</button>
		</div>
	);
};

export default SurveyFormReview;
