import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route, Switch, useLocation, useHistory,
} from 'react-router-dom';

import { fetchProducts } from './store/actions/productsList';
import { fetchPromotion } from './store/actions/promotion';
import { fetchVendors } from './store/actions/vendorsList';
import GeneralLayout from './layouts/GeneralLayout';
import ProductsList from './containers/ProductsList';
import Product from './containers/Product';
import NotFound from './containers/404';
import debounce from './utils/debounce';
import { ROOT_ROUTE } from './constants';

function getDataFromLocation(location, data) {
  let result = '';
  const regex = new RegExp(`${data}=\\w+`, 'gi');
  const match = regex.exec(location);
  if (match) {
    [, result] = match[0].split('=');
  }
  return result;
}

function checkRootRoute(route) {
  return route === ROOT_ROUTE;
}

function App() {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const history = useHistory();
  const [searchString, setSearchString] = useState(getDataFromLocation(search, 'name') || '');
  const [vendor, setVendor] = useState(getDataFromLocation(search, 'vendor') || '');
  const isRootRoute = checkRootRoute(pathname);

  useEffect(() => {
    if (isRootRoute) {
      const prdouctName = searchString ? `name=${searchString}` : '';
      const vendorName = vendor ? `vendor=${vendor}` : '';
      const queryString = [prdouctName, vendorName].filter((item) => item).join('&');
      history.push({ search: queryString });
    }
  }, [pathname, searchString, history, vendor, isRootRoute]);

  useEffect(() => {
    const debouncedDispatch = debounce(dispatch);
    debouncedDispatch(fetchProducts(searchString, vendor));
    return () => {
      debouncedDispatch.clear();
    };
  }, [dispatch, searchString, vendor]);

  useEffect(() => {
    dispatch(fetchVendors());
    dispatch(fetchPromotion());
  }, [dispatch]);

  return (
    <div className="App">
      <GeneralLayout
        isRootRoute={isRootRoute}
        searchString={searchString}
        setSearchString={setSearchString}
        vendor={vendor}
        setVendor={setVendor}
      >
        <Switch>
          <Route path="/product/:id" component={Product} />
          <Route path="/" exact component={ProductsList} />
          <Route component={NotFound} />
        </Switch>
      </GeneralLayout>
    </div>
  );
}

export default App;
