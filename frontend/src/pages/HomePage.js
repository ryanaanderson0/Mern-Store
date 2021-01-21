import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import "../App.css";
import MastHead from "../components/MastHead";
import About from "../components/About";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/prouductActions";
import Message from '../components/Message'
import Loader from '../components/Loader'


const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList)

  //destructure data we want from the state (loading boolean, error, and products)
  const { loading, error, products } = productList


  //useEffect react hook, make GET request after HomePage component is rendered
  useEffect(() => {
      dispatch(listProducts())
    }, [dispatch]
  )

  return (
    <div style={{ backgroundColor: "#F4F1DE" }}>
      <MastHead />

      <h1 style={{ paddingTop: "7%" }}>Latest Releases</h1>

      {/*loading and error conditional */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row className="pl-3">
          {/* map all the product arrays contained in the products.js file and return in columns  */}
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              {/* pass in the products.map to Product component */}
              <Product products={product} />
            </Col>
          ))}
          ;
        </Row>
      )}

      <section className="pt-5 pb-5">
        <h1 className="pb-3">
          <strong>Don't Drink Alone</strong>
        </h1>

        <Link>
          <button className="primary_button">Join Now</button>
        </Link>

        <h4 className="pt-3">Join Now & Get 10% Off Your First Order</h4>
      </section>

      <section className="spikes_tan"></section>

      <About />
    </div>
  );
};

export default HomePage;
