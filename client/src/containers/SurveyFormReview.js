import { connect } from 'react-redux';
import * as actions from '../store/actions';

import SurveyFormReview from '../components/surveys/SurveyFormReview';

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
