import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import './assets/HomePage.scss';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { makeSelectContentTemplate } from 'containers/App/selectors';
import About from '../About/Loadable';
import saga from './saga';
import reducer from './reducer';
import { loadRepos } from '../App/actions';
import question from './assets/question.svg';
import ImageSlider from '../ImageSlider/Loadable';

export class HomePage extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { contentTemplate } = this.props;
    const contentHowCanYouHelp = contentTemplate?.toJS()['how-can-you-help'];
    return (
      <React.Fragment>
        <Helmet>
          <title>The Giving Brick</title>
          <meta name="description" content="The Giving Brick" />
        </Helmet>
        <ImageSlider />
        <About />
        <div className="block__question">
          <div className="container">
            <div className="media align-items-center">
              <div className="img__holder">
                <img src={question} alt="question" />
              </div>
              <div className="media-body col-md-6">
                <div
                  className="text-descrip"
                  dangerouslySetInnerHTML={{
                    __html: contentHowCanYouHelp?.template_content,
                  }}
                />
                <Link className="text-uppercase" to="/help-us">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  contentTemplate: makeSelectContentTemplate(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
