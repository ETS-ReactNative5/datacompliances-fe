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
import { loadReferCodeRequest } from './actions';
import {
  makeSelectLoading
} from './selectors';
import {  } from 'semantic-ui-react';
import { makeSelectLocation } from '../../../App/selectors';


// import C3Chart from 'react-c3js';


// import 'c3/c3.css';
// import c3 from 'c3';


// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart, Pie, Sector, Cell,
// } from 'recharts';

//...................................mock confirmed submit response............................

const confirmedSubmit = true


//...................................mock confirmed submit response............................


//..................................mock for recharts if needed....................................
// const data03 = [
//   {name: 'Page A', value: 40},
//   {name: 'Page B', value: 30},
//   {name: 'Page C', value: 20},
//   {name: 'Page D', value: 24},
//   {name: 'Page E', value: 10},
//   {name: 'Page F', value: 20},
//   {name: 'Page G', value: 30},
// ];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 250 },
];



// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//..................................mock for recharts if needed....................................


const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectLoading(),
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => ({
  loadReferCode: id => dispatch(loadReferCodeRequest(id)),
  showDialog: dialog => dispatch(showDialog(dialog)),
});

class Report extends React.Component {
  state = { showCopyMsg: false, newreferral: false };

  render() {
    const {  } = this.props;
    return (
      <div>
        <div className="package_not_found">
          {this.props.location.pathname == '/user/dashboard/reports' &&
            <div className="ui breadcrumb">
              <Link 
                className="section"
                to={{
                  pathname: `/user/dashboard`,
                }}
              >
                Dashoard
              </Link>
              <div className="divider">/</div>
              <div className="active section">Reports</div>
            </div>
          }
          
          {confirmedSubmit == false &&
            <div className="no-products">
                  <img src={noreport}/>
                </div>
          }
          <div className="product-listing">
            <h1 className="main_title">Your Reports</h1>
             <div className="product-grid">
              {data.length > 0 ? (
                data.map((packageData, idx) =>
                    <div key={`paidList${idx}`} className="product-item">
                      <div className="product-wrap">
                          <span className="product-title">Report Name</span>
                          <br />
                          <br />
                          <ul className="feature-list">
                           <li>
                            <i className="icon-check"/>
                            <span>Report Of: Product Name</span> 
                           </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Country: Country Name </span>
                            </li>
                            <li>
                                <i className="icon-check"/>
                              <span>Industry: Industry Name </span> 
                            </li>
                          </ul>
                          <div className="buttons-wrap">
                        <Link
                            className="ui mini icon button detail-btn"
                            to={`/user/dashboard/report/detail/`}
                            key={`view__1`}
                          >
                          View Detail
                        </Link>
                        </div>
                      </div>
                    </div>
                )
              ) : this.props.isRequesting ? (
                <div className="ui segment">
                  <div className="ui active inverted dimmer">
                    <div className="ui small text loader">Loading.....</div>
                  </div>
                  <p></p>
                </div>
              ) : (
                <Card>
                  <CardContent>Products Not Found</CardContent>
                </Card>
              )}
            </div>
          </div>

           {/* <BarChart1 data={chartData.bar} /> */}
           {/* <BarChart width={700} height={300} data={data03}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
                <Pie
                  data={data}
                  cx={420}
                  cy={200}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                     {
                        // data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                        data.map((entry, index) => {
                          const color = entry.pv > 4000 ? COLORS[0] : COLORS[1];
                          return <Cell  key={`cell-${index}`} fill={color} />;
                        })
                      }
                    </Pie>
                 </PieChart> */}
                
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
