import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';

// Fields for SurveyField
const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Line', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
	{ label: 'Recipient List', name: 'emails' }
];

// SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({ label, name }) => {
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
					onSubmit={this.props.handleSubmit(values =>
						console.log(values)
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

export default reduxForm({
	form: 'surveyForm'
})(SurveyForm);
