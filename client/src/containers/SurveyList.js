import { connect } from 'react-redux';
import { fetchSurveys } from '../store/actions';

import SurveyList from '../components/surveys/SurveyList';

function mapStateToProps({ surveys }) {
	return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
