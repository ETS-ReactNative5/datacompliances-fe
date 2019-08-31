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
import { loadReferCodeRequest } from './actions';
import {

} from './selectors';
import {  } from 'semantic-ui-react';
import DoughnutChart from './DoughnutChart'

// import C3Chart from 'react-c3js';
import 'c3/c3.css';
import c3 from 'c3';

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

//............................................................................................

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


//..............................................................................................

// const data03 = [
//   {name: 'Page A', value: 40},
//   {name: 'Page B', value: 30},
//   {name: 'Page C', value: 20},
//   {name: 'Page D', value: 24},
//   {name: 'Page E', value: 10},
//   {name: 'Page F', value: 20},
//   {name: 'Page G', value: 30},
// ];

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group D', value: 250 },
// ];



// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({
  loadReferCode: id => dispatch(loadReferCodeRequest(id)),
  showDialog: dialog => dispatch(showDialog(dialog)),
});

class Report extends React.Component {
  state = { showCopyMsg: false, newreferral: false };

  componentDidMount() {
    this.updateChart();
    this.updateChart2();
  }
  componentDidUpdate() {
    this.updateChart();
    this.updateChart2();
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
    const {  } = this.props;
  
    return (
      <div>
           <div className="package_not_found">
           <div style={{width: '50%'}} id="chart">hi</div>
           <div className="doughnut-graph">
           { dataC3doughnut.map((item, index) => {
              return <DoughnutChart key={index} each={item} /> ;
           })
           }
           </div>
           <div style={{width: '50%'}} id="chart2">hi</div>
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
                   <div className="no-products">
                     <img src={noreport}/>
                   </div>
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
