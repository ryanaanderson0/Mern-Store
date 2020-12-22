import React from 'react'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products'
// import Product from '../components/Product'
import Rating from '../components/Rating'

const ProductPage = ({ match }) => {
    const product = products.find(p => p._id === match.params.id)

    return (
        <>
         <Link to='/shop'>
            <button className="primary_button mt-4">Back To Wines</button>
         </Link>

         <Row className='m-5'>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item >
                        <h3>{product.year} {product.name}</h3></ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Rating 
                            value={product.rating}
                            text={`  ${product.numReviews} Reviews`} />
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
                </ListGroup>
                    <button className='tertiary_button mt-5'>Add To Cart</button>
            </Col>
         </Row>
        </>
    )
}

export default ProductPage
