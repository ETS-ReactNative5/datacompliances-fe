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
import AppointmentSetForm from './appointmentSetForm.js'

// import DatePicker from "react-datepicker";
 
// import "react-datepicker/dist/react-datepicker.css";

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
        startDate: new Date(),
        data:{
           date: new Date()
        }
      };
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  
  }

  onChange = date => {
    this.setState({
      startDate: date,
      data: {
        ...this.state.data,
            date: date,
            time_to: "",
            time_from: ""
      },
      errors: {},
    });
  }
  handleChangeTime = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  }

  addTimeSlot = (e) => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate();
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      const dataSend = {
        date: moment(data.date, 'YYYY-MM-DD').format('LL'),
        time_to: data.time_to,
        time_from: data.time_from
      }
    }
  }

  validate = () => {
    const { data } = this.state;
    const errors = {};
    if(data.time_to < data.time_from) errors.time_difference='Start time must be less than end time'
    if (!data.time_to) errors.time_to = `Time To field must be properly filled`;
    if (!data.time_from) errors.time_from = `Time From field must be properly filled`;
     return errors
  }

  // handleChange = date => {
  //   console.log(date)
  //   this.setState({
  //     startDate: date
  //   });
  // };


  render() {
    const {  } = this.props;
    const { errors, data, startDate } = this.state
    return (
      <div>
        <AppointmentSetForm />
        
      <Calendar
          onChange={this.onChange}
          value={this.state.startDate}
          minDate={new Date()}
        /> 
       <div>
         <br />
         <br />
         <span>Set Appointment For {moment(this.state.startDate, 'YYYY-MM-DD').format('LL')}</span>
         <br />
         <br />
         {/* <DatePicker
          selected={startDate || ''}
          onChange={date => this.handleChange(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          minDate={new Date()}
      /> */}
         <div>Select a time: 
           <br />
           <br />
           {errors && errors.time_difference && (
          <span style={{ color: 'red' }}>{errors.time_difference}</span>
        )}
        <div>From: 
            <Input 
              type="time" 
              name="time_from"
              value={this.state.data.time_from || ''}
              error={errors && errors.time_from && errors.time_from !== "" ? true : false}
              onChange={this.handleChangeTime}
            />  
                {errors && errors.time_from && (
          <span style={{ color: 'red' }}>{errors.time_from}</span>
        )}
          </div>
          <br />

          <div>To: 
            <Input 
              type="time" 
              name="time_to"
              value={this.state.data.time_to || ''}
              error={errors && errors.time_to && errors.time_to !== "" ? true : false}
              onChange={this.handleChangeTime} 
           />
            {errors && errors.time_to && (
          <span style={{ color: 'red' }}>{errors.time_to}</span>
        )}
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
