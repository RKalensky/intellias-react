import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Row, Col } from 'react-bootstrap';
import Search from '../../components/Search';
import VendorsFilter from '../../components/VendorsFilter';
import { ROOT_ROUTE } from '../../constants';
import './index.css';

const GeneralLayout = ({
  children, isRootRoute, setSearchString, searchString, setVendor, vendor,
}) => (
  <>
    <Navbar className="top-nav p-3 pl-5 pb-4" bg="dark" variant="dark">
      <Row className="w-100 justify-content-between">
        <Col className="mt-2" sm={12} md={4}>
          <NavLink to={ROOT_ROUTE} className="project-name mr-auto">
            <Navbar.Brand>
              <h4 style={{ fontWeight: 700 }}>Candidate pet project</h4>
            </Navbar.Brand>
          </NavLink>
        </Col>
        <Col className="mt-2" sm={12} md={6}>
          { isRootRoute && (
            <Row className="justify-content-end">
              <Col className="mb-2" sm={12} md={5}>
                <Search onChangeHandler={setSearchString} currentValue={searchString} />
              </Col>
              <Col sm={12} md={5}>
                <VendorsFilter onChangeHandler={setVendor} currentValue={vendor} />
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Navbar>
    {children}
  </>
);

export default GeneralLayout;
