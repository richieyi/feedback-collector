import { connect } from 'react-redux';

import SurveyFormReview from '../components/surveys/SurveyFormReview';

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps)(SurveyFormReview);
