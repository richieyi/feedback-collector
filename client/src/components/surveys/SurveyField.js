import React from 'react';

// SurveyField contains logic to render single label and text input
export default ({ input, label }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} />
		</div>
	);
};
