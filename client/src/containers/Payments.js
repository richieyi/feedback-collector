import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Payments from '../components/Payments';

export default connect(null, actions)(Payments);
