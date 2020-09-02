import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductsList from './index';
import initStore from '../../store/index';
import mockProductsList from '../../mocks/productsList';
import mockPromotionCard from '../../mocks/promotionCard';

const renderProductsList = (store) => (
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ProductsList />
      </BrowserRouter>
    </Provider>,
  )
);

describe('Products list behaviour', () => {
  test('renders component with empty list', () => {
    const emptyStore = initStore();
    const { queryAllByTestId } = renderProductsList(emptyStore);

    const items = queryAllByTestId('col');

    expect(items.length).toBe(0);
  });

  test('should show spinner while loading products', () => {
    const store = initStore({ productsList: { isLoading: true, list: [] } });
    const { getByTestId } = renderProductsList(store);

    const productsContainer = getByTestId('products-container');
    const spinner = getByTestId('spinner');

    expect(productsContainer).toContainElement(spinner);
  });

  test('renders list of products', () => {
    const productsList = mockProductsList();
    const store = initStore({ productsList: { list: productsList } });
    const { queryAllByTestId } = renderProductsList(store);

    const items = queryAllByTestId('col');
    expect(items.length).toBe(productsList.length);
  });

  test('renders promotion card on predefined position', () => {
    const productsList = mockProductsList();
    const promotionCard = mockPromotionCard();
    const store = initStore({
      productsList: { list: productsList },
      promotion: { data: promotionCard },
    });
    const { queryAllByTestId, getByTestId } = renderProductsList(store);

    const items = queryAllByTestId('col');
    const promotionCardEl = getByTestId('promotion-card');
    expect(items[promotionCard.order]).toContainElement(promotionCardEl);
  });

  test('renders promotion card on different position if list length less than predefined position', () => {
    const [firstProductList] = mockProductsList();
    const promotionCard = mockPromotionCard();
    const store = initStore({
      productsList: { list: [firstProductList] },
      promotion: { data: promotionCard },
    });
    const { queryAllByTestId, getByTestId } = renderProductsList(store);

    const items = queryAllByTestId('col');
    const promotionCardEl = getByTestId('promotion-card');
    expect(items[items.length - 1]).toContainElement(promotionCardEl);
  });

  test('doesn\'t render promotion card if products list legth is equal to 0', () => {
    const promotionCard = mockPromotionCard();
    const store = initStore({
      productsList: { list: [] },
      promotion: { data: promotionCard },
    });
    const { getByTestId } = renderProductsList(store);

    const productsContainer = getByTestId('products-container');
    const promotionCardClassName = 'promotion-card';
    expect(productsContainer.querySelector(`.${promotionCardClassName}`)).toBe(null);
  });
});
