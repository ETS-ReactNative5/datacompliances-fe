import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { showDialog } from 'containers/App/actions';
import { makeSelectUserId, makeSelectDialog } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import Toaster from 'components/Toaster';
import { loadReferCodeRequest } from './actions';
import {

} from './selectors';
import {  } from 'semantic-ui-react';

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({
  loadReferCode: id => dispatch(loadReferCodeRequest(id)),
  showDialog: dialog => dispatch(showDialog(dialog)),
});

// let ReportUrl;

class Report extends React.Component {
  state = { showCopyMsg: false, newreferral: false };

  componentWillUnmount() {
  }
  componentDidMount() {
   
  }

  render() {
    const {

    } = this.props;
  
    return (
      <div>
           <p>dddddddddddd</p>       
      </div>
    );
  }
}

const withReducer = injectReducer({ key: 'report', reducer });
const withSaga = injectSaga({ key: 'report', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Report);
