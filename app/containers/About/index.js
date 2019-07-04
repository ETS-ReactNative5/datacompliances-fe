import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { makeSelectRequesting, makeSelectData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import TeamMembers from '../TeamMember/Loadable';
import FinancialStatus from '../Financial/Loadable';
import Partnership from '../Partnership/Loadable';
import { loadAboutRequest } from './actions';
import image1 from './assets/image1.jpg';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import { Container } from 'react-bootstrap';
import './assets/about.scss';

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchAbout: () => dispatch(loadAboutRequest()),
});

export class About extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchAbout();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && nextProps.data.size > 0 != this.props.data) {
      this.setState({
        data: nextProps.data.toJS(),
      });
    }
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        {data && Object.keys(data).length > 0 && (
          <div className="about__block">
            <div className="container">
              <h2>ABOUT US – The Giving Brick</h2>
              {data.image_name && data.image_name.document_name && (
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="img_holder">
                      <img
                        className="img-fluid"
                        src={`${DOCUMENT_URL_UPDATE}${data.image_name &&
                          data.image_name.document_name}`}
                        alt={data.title}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data && data.excerpt && data.excerpt,
                      }}
                    />
                    <Link className="text-uppercase" to={`/about-us`}>
                      Read More
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'about', reducer });
const withSaga = injectSaga({ key: 'about', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(About);
