import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import formFields from './formFields';

import validateEmails from '../../utils/validateEmails';

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
	renderFields() {
		return formFields.map(({ name, label }) => {
			return (
				<Field
					key={name}
					component={SurveyField}
					type="text"
					label={label}
					name={name}
				/>
			);
		});
	}
	render() {
		return (
			<div>
				<form
					onSubmit={this.props.handleSubmit(
						this.props.onSurveySubmit
					)}
				>
					{this.renderFields()}
					<Link
						to="/surveys"
						className="red btn-flat left white-text"
					>
						Cancel
						<i className="material-icons right">cancel</i>
					</Link>
					<button
						type="submit"
						className="teal btn-flat right white-text"
					>
						Next
						<i className="material-icons right">navigate_next</i>
					</button>
				</form>
			</div>
		);
	}
}

// Form validation
function validate(values) {
	// Create empty errors object
	const errors = {};

	errors.emails = validateEmails(values.emails || '');

	// redux-form automatically matches up error with proper Field
	formFields.forEach(({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value!';
		}
	});

	// Return empty object if no errors
	// or return object with error properties
	return errors;
}

// Wire up reduxForm helper
export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);
