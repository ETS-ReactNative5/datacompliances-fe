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
import moment from 'moment';
import {

} from './selectors';
import { Input } from 'semantic-ui-react';
import { makeSelectLocation } from '../../../App/selectors';
import Calendar from 'react-calendar';

import {
 
} from './actions';

import '../../assets/calendar.scss';

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({

});

class Report extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        date: new Date(),
        data:{

        }
      };
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  
  }

  onChange = date => {
    console.log(date)
    this.setState({ date })
  }
  handleChangeTime = (e) => {
    console.log(e.target.name, '>>',e.target.value)
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  }

  addTimeSlot = () => {
    // console.log(this.state.data,'gggg')
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
       <div>
         <br />
         <br />
         <span>Set Appointment For {moment(this.state.date, 'YYYY-MM-DD').format('LL')}</span>
         <br />
         <br />
         <div>Select a time: 
           <br />
           <br />
          <div>To: 
            <Input 
              type="time" 
              name="time_to"
              onChange={this.handleChangeTime} 
            >
              
            </Input>
          </div>
          <br />
          <div>From: 
            <Input 
              type="time" 
              name="time_from"
              onChange={this.handleChangeTime}
            >  
          </Input>
          </div>
          </div>
          <div>
            <br />
            <button onClick={this.addTimeSlot}>Add</button>
          </div>
         <br />
         <br />
       </div>
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
