/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './style.scss';
export default function NotFound() {
  return (
    <div className="not__found__page">
      <Container>
        <div className="heading">
          <h1>Oops</h1>
          <h2>404 - THE PAGE CAN'T BE FOUND</h2>
        </div>
        <Link className="btn btn-sm btn-danger" to="/">
          Go to Home
        </Link>
      </Container>
    </div>
  );
}
