import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import FinancialStatus from '../../Financial/Loadable';
import Partnership from '../../Partnership/Loadable';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { DOCUMENT_URL_UPDATE } from 'containers/App/constants';
import { makeSelectContentTemplate } from 'containers/App/selectors';
import { makeSelectRequesting, makeSelectData } from '../selectors';
import { loadAboutRequest } from '../actions';
import reducer from '../reducer';
import saga from '../saga';
import image1 from '../assets/image1.jpg';
import '../assets/about.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const mapStateToProps = createStructuredSelector({
  requesting: makeSelectRequesting(),
  data: makeSelectData(),
  contentTemplate: makeSelectContentTemplate(),
});

const mapDispatchToProps = dispatch => ({
  fetchAbout: () => dispatch(loadAboutRequest()),
});

export class AboutDetail extends React.Component {
  state = {
    data: {},
    activeTab: 'about-us',
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
    const { data, activeTab } = this.state;
    const { requesting, contentTemplate } = this.props;
    const contentTemplateData = contentTemplate ? contentTemplate.toJS() : [];

    return (
      <React.Fragment>
        <Helmet>
          <title>About</title>
          <meta name="description" content="About" />
        </Helmet>
        <div className="content__wrap">
          <div className="container">
            <Tabs
              id="about-tabs"
              active={activeTab}
              onSelect={key => this.setState({ activeTab: key })}
            >
              <Tab eventKey="about-us" title="About Us">
                {data && Object.keys(data).length > 0 && (
                  <div className="about__wrap">
                    <div dangerouslySetInnerHTML={{ __html: data.body }} />
                  </div>
                )}
              </Tab>
              <Tab eventKey="what-we-do" title="What We Do">
                <TabContent
                  contentTemplateData={contentTemplateData}
                  activeTab={activeTab}
                />
              </Tab>
              <Tab eventKey="why-we-do-it" title="Why We Do It">
                <TabContent
                  contentTemplateData={contentTemplateData}
                  activeTab={activeTab}
                />
              </Tab>
              <Tab eventKey="who-we-do-it-for" title="Who We Do It For">
                <TabContent
                  contentTemplateData={contentTemplateData}
                  activeTab={activeTab}
                />
              </Tab>
              <Tab eventKey="why-lego" title="Why LEGO?">
                <TabContent
                  contentTemplateData={contentTemplateData}
                  activeTab={activeTab}
                />
              </Tab>
              <Tab eventKey="who-we-are" title="Who We Are">
                <TabContent
                  contentTemplateData={contentTemplateData}
                  activeTab={activeTab}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="mission">
          <div className="container">
            <div className="row row align-items-center">
              <div className="col-lg-4 col-md-4">
                <div className="img__holder">
                  <img className="img-fluid" src={image1} alt="" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 ">
                <div className="text-center py-4">
                  <h4>OUR MISSION</h4>
                  <p>Building happiness one brick at a time</p>
                  <p>
                    The Giving Brick’s mission is to work with the neediest
                    communities to give less fortunate kids the opportunity to
                    own a LEGO set of their own.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const TabContent = ({ contentTemplateData, activeTab }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: contentTemplateData[activeTab]?.template_content,
    }}
  />
);

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
)(AboutDetail);
