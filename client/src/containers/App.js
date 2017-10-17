import { connect } from 'react-redux';

import * as actions from '../store/actions';
import App from '../components/App';

export default connect(null, actions)(App);
