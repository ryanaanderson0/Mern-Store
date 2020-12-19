import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'

const HomePage = () => {
    return (
        <>
          <h1>Latest Products</h1> 
          <Row>
            {/* map all the product arrays contained in the products.js file and return in columns  */}
            {products.map(products => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* pass in the products.map to Product component */}
                    <Product products={products}/>
                </Col>
            ))};
          </Row>
        </>
    )
}

export default HomePage
