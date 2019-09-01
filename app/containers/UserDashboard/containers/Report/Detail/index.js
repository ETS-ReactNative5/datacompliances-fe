import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  } from 'semantic-ui-react';
import { changeReferralRequest, clearMessage } from './actions';
import {
  makeSelectError,
  makeSelectResponse,
} from './selectors';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './sagas';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import DoughnutChart from './DoughnutChart'
import 'c3/c3.css';
import c3 from 'c3';


//......................................mock data c3js...........................................

const dataC3doughnut = [
  { _id: 1111, total: 10, compliant: 4, tag_name: 'tag1' },
  { _id: 2222, total: 12, compliant: 6, tag_name: 'tag2' },
  { _id: 3333, total: 15, compliant: 14, tag_name: 'tag3' },
  { _id: 4444, total: 14, compliant: 10, tag_name: 'tag4' },
  { _id: 5555, total: 9, compliant: 7, tag_name: 'tag5' },
];


// const columns = [
//   [30, 200, 100, 400, 150],
// ];

const dataBar = [
  { _id: 1111, value: 4, tag_name: 'tag1' },
  { _id: 2222, value: 6, tag_name: 'tag2' },
  { _id: 3333, value: 14, tag_name: 'tag3' },
  { _id: 4444, value: 10, tag_name: 'tag4' },
  { _id: 5555, value: 7, tag_name: 'tag5' },
]


//......................................mock data c3js...........................................

class NewReferral extends React.Component {
  state = {
    data: {},
    errors: {},
    close: true,
  };

  componentDidMount() {
    this.updateChart();
    this.updateChart2();
  }
  componentDidUpdate() {
    this.updateChart();
    this.updateChart2();
  }


  componentWillUnmount() {
    this.props.clearMessage();
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.errorResponse != this.props.errorResponse) {
    //   this.setState({
    //     errorResponse: nextProps.errorResponse ? nextProps.errorResponse : '',
    //   });
    // }
    // if (nextProps.successResponse != this.props.successResponse) {
    //   this.setState({
    //     successResponse: nextProps.successResponse
    //       ? nextProps.successResponse
    //       : '',
    //   });
    // }
  }


  updateChart2 = () => {
    var chart2 = c3.generate({
    bindto: '#chart2',
      data: {
          columns: [
              ['compliant', 91.4]
          ],
          type: 'gauge',
      
      },
      color: {
          pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
          threshold: {
  //            unit: 'value', // percentage is default
  //            max: 200, // 100 is default
              values: [30, 60, 90, 100]
          }
      },
      size: {
          height: 180
      }
  });

  }

  updateChart = () => {
    var arrC3 = ['Tags']
    dataBar.map((item, index) => {
      Object.keys(item).map((val, idx) => {
        if(val === 'tag_name') {
            arrC3.push(item.tag_name)
        }
      })
    })

  const chart = c3.generate({
    bindto: '#chart',
    data: {
      json: dataBar,
      // columns: [arrC3],
      type: 'bar',
      keys: {
        value: ['value'],
    },
    },
    axis: {
      x: {
          type: 'category',
          categories: arrC3
      }
  }
  });
}




  render() {
    const { data, errors } = this.state;
    const { isRequesting, errorResponse, successResponse } = this.props;

    return (
      <div>
           <div style={{width: '50%'}} id="chart">hi</div>
           <div className="doughnut-graph">
           { dataC3doughnut.map((item, index) => {
              return <DoughnutChart key={index} each={item} /> ;
           })
           }
           </div>
           <div style={{width: '50%'}} id="chart2">hi</div>   
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
});

const mapDispatchToProps = dispatch => ({
  setReferral: data => dispatch(changeReferralRequest(data)),
  clearMessage: () => dispatch(clearMessage()),
});

const withReducer = injectReducer({ key: 'reportDetail', reducer });
const withSaga = injectSaga({ key: 'reportDetail', saga });
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewReferral);
