import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import PromotionItem from '../../components/PromotionItem';
import Spinner from '../../components/Spinner';
import getProductsListLoadingStatus from '../../selectors/getProductsListLoadingStatus';
import getMappedProductsList from '../../selectors/getMappedProductsList';
import getPromotionItem from '../../selectors/getPromotionItem';

function shouldShowPromotionItem(isPromotionVisible, promotionText, productsList) {
  return isPromotionVisible && promotionText && productsList.length;
}

function getItemTemplate(key, Component) {
  return (
    <Col className="product-item-wrapper mb-5" xs={12} sm={6} md={4} lg={3} key={key} data-testid="col">
      {Component}
    </Col>
  );
}

const ProductsList = () => {
  const areProductsLoaded = useSelector(getProductsListLoadingStatus);
  const mappedProductsList = useSelector(getMappedProductsList);
  const {
    hide: isPromotionHidden, text: promotionText, order: promotionOrder,
  } = useSelector(getPromotionItem);

  const getProductsListWithPromotion = useCallback(() => {
    const targetProductsList = mappedProductsList.map(({
      id, name, vendor, video: { url: videoUrl }, poster: { url: posterUrl },
    }) => getItemTemplate(id,
      (
        <NavLink to={`product/${id}`}>
          <ProductItem
            {...{
              name, vendor, videoUrl, posterUrl,
            }}
          />
        </NavLink>
      )));

    if (shouldShowPromotionItem(!isPromotionHidden, promotionText, targetProductsList)) {
      const promotionItem = getItemTemplate('promotion',
        <PromotionItem
          text={promotionText}
        />);

      const promotionPushIndex = mappedProductsList.length <= promotionOrder
        ? mappedProductsList.length
        : promotionOrder;

      targetProductsList.splice(promotionPushIndex, 0, promotionItem);
    }

    return targetProductsList;
  }, [mappedProductsList, isPromotionHidden, promotionText, promotionOrder]);

  return (
    <Container data-testid="products-container">
      {areProductsLoaded
        ? (
          <Row>
            {getProductsListWithPromotion()}
          </Row>
        )
        : <Spinner animation="border" variant="light" />}
    </Container>
  );
};

export default ProductsList;
