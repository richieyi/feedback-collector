import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

// SurveyNew shows SurveyForm and SurveyFormReview
import SurveyForm from './SurveyForm';
import SurveyFormReview from '../../containers/SurveyFormReview';

class SurveyNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showFormReview: false
		};
	}
	renderContent() {
		if (this.state.showFormReview) {
			return (
				<SurveyFormReview
					onCancel={() => this.setState({ showFormReview: false })}
				/>
			);
		}
		return (
			<SurveyForm
				onSurveySubmit={() => this.setState({ showFormReview: true })}
			/>
		);
	}
	render() {
		return <div>{this.renderContent()}</div>;
	}
}

// Wire up reduxForm helper
// Will destroyOnUnmount by default when navigating away from SurveyNew component
export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
