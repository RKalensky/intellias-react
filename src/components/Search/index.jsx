import React from 'react';
import { Form } from 'react-bootstrap';

const Search = ({ onChangeHandler, currentValue }) => (
  <Form className="ml-4 w-25" onSubmit={(event) => event.preventDefault()}>
    <Form.Control type="text" placeholder="Search products" value={currentValue} onChange={({ target: { value } }) => onChangeHandler(value)} />
  </Form>
);

export default Search;
