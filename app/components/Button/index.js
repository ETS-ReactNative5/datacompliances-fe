/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'


const Buttons = (props) => {
  const { onClick, loading, variant, type } = props

  return (<Button type={type} variant={variant} onClick={onClick} disabled={loading}>{loading ? <div className="spinner-border spinner-border-sm" role="status">
    <span className="sr-only">Loading...</span>
  </div> : Children.toArray(props.children)}</Button>)
}

Button.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  variant: PropTypes.string,
};

export default Buttons;
