import React, { useState, useEffect } from "react";
import { Row, Col, Image, ListGroup, ListGroupItem, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import { listProductItem } from "../actions/prouductActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProductPage = ({ history, match }) => {
  const [qty, setQty] = useState(0);

  const dispatch = useDispatch();

  const productItem = useSelector((state) => state.productItem);
  const { loading, error, product } = productItem;

  useEffect(() => {
    dispatch(listProductItem(match.params.id));
  }, [dispatch, match]);

  //pushes product id and quantity to cart page
  const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}? qty=${qty}`)
  }

  return (
    <>
      <Link to="/shop">
        <button className="primary_button mt-4">Back To Wines</button>
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="m-5">
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  {product.year} {product.name}
                </h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`  ${product.numReviews} Reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Price:</strong> ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Description:</strong> {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Tasting Notes:</strong> {product.notes}
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Quantity:</strong>{" "}
                    </Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
            </ListGroup>
            <button 
                className="tertiary_button mt-5"
                onClick={addToCartHandler}>Add To Cart</button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
