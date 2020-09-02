import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotFound = () => (
  <Container className="text-center">
    <Row>
      <Col className="col-md-12">
        <div className="error-template text-white">
          <h2 className="display-4">
            Oops!
          </h2>
          <h1 className="display-1 font-weight-bold">
            404 Not Found
          </h1>
          <h4>
            Sorry, an error has occured, Requested page not found!
          </h4>
        </div>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
