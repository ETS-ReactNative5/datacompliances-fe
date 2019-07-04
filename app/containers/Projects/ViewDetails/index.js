import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEachProject } from '../selectors';
import { loadProjectByIdRequest } from '../action';
import reducer from '../reducer';
import saga from '../saga';
import messages from './messages';
import moment from 'moment';
import calender from '..//assets/calender.svg';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';

/* eslint-disable react/prefer-stateless-function */
export class ProjectDetail extends React.Component {
  state = {};

  componentDidMount() {
    const slug = this.props.match.params.slug
      ? this.props.match.params.slug
      : null;
    if (slug) this.props.fetchProjectDetail(slug);
  }
  // hell
  render() {
    const { projects } = this.props;
    let data = projects.size > 0 ? projects.toJS() : '';
    return (
      <div className="project__detail">
        <Helmet>
          <title>{data && data.title}</title>
          <meta name="description" content="Projects" />
        </Helmet>
        <React.Fragment>
          <div className="content__wrap">
            <div className="container">
              <h1>{data && data.title}</h1>
              <span className="date">
                <img src={calender} alt="calender" />
                {moment(data.start_date).format('MMM Do YYYY')}
                {' - '}
                {moment(data.end_date).format('MMM Do YYYY')}
              </span>
              {data && data.image_name && (
                <div className="img__holder py-3">
                  <img
                    className="img-fluid "
                    src={`${DOCUMENT_URL_UPDATE}${
                      data.image_name.document_name
                    }`}
                    alt={data && data.title}
                  />
                </div>
              )}
              <div>{data && data.short_info}</div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  projects: makeSelectEachProject(),
});

const mapDispatchToProps = dispatch => ({
  fetchProjectDetail: slug => dispatch(loadProjectByIdRequest(slug)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'project', reducer });
const withSaga = injectSaga({ key: 'project', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProjectDetail);
