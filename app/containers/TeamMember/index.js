import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { loadTeamMemberRequest } from './actions';
import './assets/style.scss';
import {
  makeSelectSuccess,
  makeSelectResponse,
  makeSelectError,
  makeSelectRequesting,
  makeSelectData,
} from './selectors';

import { DOCUMENT_URL } from 'containers/App/constants';

export class TeamMember extends React.PureComponent {
  state = {
    page: 1,
    perPage: 10,
    query: {},
  };
  componentDidMount() {
    const { page, perPage, query } = this.state;
    this.props.fetchTeamMember(page, perPage, query);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data && nextProps.data.size > 0) {
      this.setState({
        data: nextProps.data.toJS(),
      });
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="team">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-lg-4 ">
              <h4>BOARD OF DIRECTORS</h4>
              <p>
                Iquatur, asi si nis dolupta quidebitatur sam, cumet que
                volupturibea solum quae et laut aut ullaut dolore eritatqui
                doluptas eseque nonse nonsequunt eat. Ibus sum quia nim volo
                blantum, commolore, imus escitatur molo moditat quat verferunto
                core et ea pa volor aliquaspiet faci doloria sunt erita doluptin
                rerio.
              </p>
            </div>
            <div className="col-lg-8 ">
              <div className="row">
                {data &&
                  data.dataList &&
                  data.dataList.map((eachdata, idx) => (
                    <div className="col-md-4" key={`cat${idx}`}>
                      <div className="img__holder">
                        {eachdata.image_name.document_name && (
                          <img
                            className="img-fluid"
                            src={`${DOCUMENT_URL}${
                              eachdata.image_name.document_name
                            }`}
                          />
                        )}
                      </div>
                      <h5 className="text-center mt-1">{eachdata.name}</h5>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isSuccess: makeSelectSuccess(),
  isRequesting: makeSelectRequesting(),
  successResponse: makeSelectResponse(),
  errorResponse: makeSelectError(),
  data: makeSelectData(),
});

const mapDispatchToProps = dispatch => ({
  fetchTeamMember: () => dispatch(loadTeamMemberRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'team', reducer });
const withSaga = injectSaga({ key: 'team', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TeamMember);
