import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../store/actions';

import SurveyFormReview from '../components/surveys/SurveyFormReview';

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

// Using withRouter, SurveyFormReview knows about history object
// provided by react-router and is passed into props
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
