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
import noreport from 'assets/images/report.png';
import { Link } from 'react-router-dom'
import {

} from './selectors';
import { Button, Modal, Header } from 'semantic-ui-react';
import { makeSelectLocation } from '../../../App/selectors';
import Calendar from 'react-calendar';

import {
 
} from './actions'

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({

});

class Report extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        date: new Date(),
      };
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  
  }

  onChange = date => {
    this.setState({ date })
  }
  
  render() {
    const {  } = this.props;
    const {  } = this.state
    return (
      <div>
      
      <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />  
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
