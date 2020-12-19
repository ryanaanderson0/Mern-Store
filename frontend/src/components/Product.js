import React from 'react'
import { Card } from 'react-bootstrap'

// instead of passing prop, we can destructure and have access to products prop
const Product = ({products}) => {
    return (
        <Card className='my-3 p-3 shadow'>
            {/* use a template literal for product href */}
            <a href={`/product/${products._id}`}>
                <Card.Img src={products.image} variant='top' ></Card.Img> 
            </a>
        </Card>
    )
}

export default Product
