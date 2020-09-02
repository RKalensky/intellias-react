import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import getVendorsList from '../../selectors/getVendorsList';

const VendorsFilter = ({ onChangeHandler, currentValue }) => {
  const vendorsList = useSelector(getVendorsList);

  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Control as="select" value={currentValue} onChange={({ target: { value } }) => onChangeHandler(value)}>
        {vendorsList.map((vendor, index) => <option key={vendor} value={index ? vendor : ''}>{vendor}</option>)}
      </Form.Control>
    </Form>
  );
};

export default VendorsFilter;
