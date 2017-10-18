import { connect } from 'react-redux';

import Header from '../components/Header';

// function mapStateToProps(state) {
// 	return {
// 		auth: state.auth
// 	};
// }
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
