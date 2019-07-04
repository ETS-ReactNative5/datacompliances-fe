import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './assets/projects.scss';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectData } from './selectors';
import { loadProjectRequest } from './action';
import reducer from './reducer';
import saga from './saga';
import { Link } from 'react-router-dom';
import messages from './messages';
import calender from './assets/calender.svg';
let newFilter = [];

export class Projects extends React.Component {
  state = {
    page: 1,
    perPage: 4,
    query: {},
  };
  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchProject(page, perPage, '');
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    const { data } = this.props;
    let tempData = data && data.size > 0 ? data.toJS() : [];
    newFilter = [];
    tempData.dataList.map((eachData, index) => {
      if (!Object.keys(newFilter).includes(eachData.category)) {
        newFilter[eachData.category] = [eachData];
      } else {
        newFilter[eachData.category].push(eachData);
      }
    });
    return (
      <div className="project">
        <React.Fragment>
          <div className="title__wrap">
            <div className="container">
              <h1>Our Projects</h1>
            </div>
          </div>
          <div className="content__wrap">
            <div className="container">
              <div className="row">
                {Object.keys(newFilter).map((eachData, index) => (
                  <div className="col-lg-6" key={`data${index}`}>
                    <div className="custom__list">
                      <h5 className="title">{eachData}</h5>
                      <ul>
                        {newFilter[eachData].map((newData, idx) => (
                          <li key={`category${idx}`}>
                            <div>
                              <div>{newData.title}</div>
                              <span className="date">
                                <img src={calender} alt="calender" /> 26th April
                                2019 - 31st April 2019
                              </span>
                            </div>
                            <div className="ml-auto link">
                              <Link to={`/projects/detail/${newData.slug}`}>
                                View Detail
                              </Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (page, perPage, query) =>
    dispatch(loadProjectRequest(page, perPage, query)),
});

const withReducer = injectReducer({ key: 'project', reducer });
const withSaga = injectSaga({ key: 'project', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(Projects);
