import React from 'react';

import formFields from './formFields';

// SurveyFormReview shows users their form inputs for review
const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
	const reviewFields = formFields.map(({ name, label }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});
	return (
		<div>
			<h5>Please confirm your entries!</h5>
			{reviewFields}
			<button
				className="yellow darken-3 btn-flat white-text"
				onClick={onCancel}
			>
				Back
				<i className="material-icons right">backspace</i>
			</button>
			<button
				className="green btn-flat right white-text"
				onClick={() => submitSurvey(formValues)}
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

export default SurveyFormReview;
