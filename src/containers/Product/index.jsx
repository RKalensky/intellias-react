import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Row, Col, Image,
} from 'react-bootstrap';
import fetchData from '../../services/fetchData';
import Video from '../../components/Video';
import Spinner from '../../components/Spinner';
import './index.css';

function getMediasByType(collection = [], mediaType) {
  return collection.filter(({ type }) => type === mediaType);
}

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  let image = null;
  let videos = [];

  useEffect(() => {
    const fetchProduct = async () => {
      const { data: { productData: response } } = await fetchData(`/api/product/${id}`);
      setProductData(response);
    };

    fetchProduct();
  }, [id, setProductData]);

  if (productData) {
    [image] = getMediasByType(productData.media, 'image');
    videos = getMediasByType(productData.media, 'video');
  }

  return (
    productData
      ? (
        <Container className="product-container">
          <Row className="d-flex justify-content-between align-items-center">
            <Col className="mb-5" xs={12} md={4}>
              {image && <Image src={image.url} alt="product image" fluid />}
              <div className="text-left">
                <h4 className="mb-1">{productData.name}</h4>
                <p className="vendor">
                  Vendor:
                  {` ${productData.vendor}`}
                </p>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <Container className="videos-container">
                <Row>
                  {videos && videos.map(({ id: keyId, url }) => (
                    <Col key={keyId} xs={12} className="mb-3">
                      <Video src={url} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      )
      : <Spinner />
  );
};

export default Product;
