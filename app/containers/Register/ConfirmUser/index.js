import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { confirmUserRequest } from './actions';
import { makeSelectRequesting, makeSelectError, makeSelectResponse, makeSelectSuccess } from './selectors';
import Spinner from 'components/common/Spinner';

import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducers';
import saga from './sagas';

const mapStateToProps = createStructuredSelector({
  isRequesting: makeSelectRequesting(),
  success: makeSelectSuccess(),
  errorResponse: makeSelectError(),
  successResponse: makeSelectResponse()
});

const mapDispatchToProps = (dispatch) => ({
  confirmUser: (userId) => dispatch(confirmUserRequest(userId))
});

class ConfirmUser extends React.Component {
  static propTypes = {
    isRequesting: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    confirmUser: PropTypes.func.isRequired,
    match: PropTypes.object
  };
  componentDidMount() {
    const { userid } = this.props.match.params;
    if (userid) {
      console.log(userid,'>>>>')
      this.props.confirmUser(userid);
     }
    }
  render() {
    const { requesting, success, errorResponse, successResponse, isRequesting } = this.props;
    return (
      <section className="ptn-1 align-center">
        {/*{isRequesting && <Spinner />}*/}
        { isRequesting ? <Spinner /> : (
          <div className="wrapper">
            <div className="align-center">
              <div className={`segment message ${success ? 'positive': 'negative'} card-center card-md has-img-floating`}>
                <div className="img-floating round bg-black"><i className="icon-users" /></div>
                { successResponse && typeof successResponse === 'string' &&
                <p className="mg-all-md">
                  { successResponse }
                </p> }
                { errorResponse && typeof errorResponse === 'string' &&
                <p className="mg-all-md">{ errorResponse } </p> }
                <Link className="fluid button primary" to="/">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registerConfirmUser', reducer });
const withSaga = injectSaga({ key: 'registerConfirmUser', saga });

export default compose(withReducer, withSaga, withConnect)(ConfirmUser);
