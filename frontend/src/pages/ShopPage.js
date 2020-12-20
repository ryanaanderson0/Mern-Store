import React from 'react'
import Product from '../components/Product'
import products from '../products'
import { Row, Col} from 'react-bootstrap'

const ShopPage = () => {
    return (
        <div>
            <h1 style={{backgroundColor: '#e63946'}} className='py-3'>RED WINE</h1>
            <Row>
            {/* map all the product arrays contained in the products.js file and return in columns  */}
            {products.map(products => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* pass in the products.map to Product component */}
                    <Product products={products}/>
                </Col>
            ))};
          </Row>

          <h1 style={{backgroundColor: '#f2cc8f'}} className='py-3'>WHITE WINE</h1>

          <Row>
            {/* map all the product arrays contained in the products.js file and return in columns  */}
            {products.map(products => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* pass in the products.map to Product component */}
                    <Product products={products}/>
                </Col>
            ))};
          </Row>

          <h1 style={{backgroundColor: '#e56b6f'}} className='py-3'> ROSE </h1>

          <Row>
            {/* map all the product arrays contained in the products.js file and return in columns  */}
            {products.map(products => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* pass in the products.map to Product component */}
                    <Product products={products}/>
                </Col>
            ))};
          </Row>

        </div>
    )
}

export default ShopPage
