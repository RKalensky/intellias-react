import { combineReducers } from 'redux';
import productsList from './productsList';
import vendorsList from './vendorsList';
import promotion from './promotion';

export default combineReducers({ productsList, vendorsList, promotion });
