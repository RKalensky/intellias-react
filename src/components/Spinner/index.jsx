import React from 'react';
import { Spinner } from 'react-bootstrap';

export default ({ variant = 'light' }) => (
  <div className="spinner-wrapper d-flex justify-content-center" data-testid="spinner" role="status">
    <Spinner style={{ width: '50px', height: '50px' }} animation="border" variant={variant}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  </div>
);
