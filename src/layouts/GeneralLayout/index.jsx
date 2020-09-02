import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Search from '../../components/Search';
import VendorsFilter from '../../components/VendorsFilter';
import { ROOT_ROUTE } from '../../constants';
import './index.css';

const GeneralLayout = ({
  children, isRootRoute, setSearchString, searchString, setVendor, vendor,
}) => (
  <>
    <Navbar fixed="top" className="p-3 justify-content-end" bg="dark" variant="dark">
      <NavLink to={ROOT_ROUTE} className="project-name mr-auto">
        <Navbar.Brand>
          Candidate pet project
        </Navbar.Brand>
      </NavLink>
      { isRootRoute && (
        <>
          <VendorsFilter onChangeHandler={setVendor} currentValue={vendor} />
          <Search onChangeHandler={setSearchString} currentValue={searchString} />
        </>
      )}
    </Navbar>
    {children}
  </>
);

export default GeneralLayout;
