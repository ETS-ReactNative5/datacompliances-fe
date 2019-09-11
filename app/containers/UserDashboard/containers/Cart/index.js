import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showDialog } from 'containers/App/actions';
// import { makeSelectUserId, makeSelectDialog } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import Toaster from 'components/Toaster';
import noreport from 'assets/images/report.png';
import { Link } from 'react-router-dom'
import {
  
} from './selectors';
// import { makeSelectLocation } from '../../../App/selectors';

import {

} from './actions'

const mapStateToProps = createStructuredSelector({
  // isRequesting: makeSelectLoading(),
  
});

const mapDispatchToProps = dispatch => ({
  showDialog: dialog => dispatch(showDialog(dialog)),
});

class Report extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 

      };
  }

  render() {
    const {  } = this.props;
    const { } = this.state
    return (
      <div>
       <p>Here</p>
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'cartProduct', reducer });
const withSaga = injectSaga({ key: 'cartProduct', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Report);
