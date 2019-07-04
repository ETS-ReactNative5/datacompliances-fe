import React from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
class AlertDismissable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Alert dismissible variant={this.props.type}>
        <Alert.Heading>Message From Server</Alert.Heading>
        <p>
          {this.props.message}
        </p>
      </Alert>

    );
  }
}
AlertDismissable.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
export default AlertDismissable