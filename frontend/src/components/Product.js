import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'




// instead of passing prop, we can destructure and have access to products prop
const Product = ({products}) => {
    return (
    
        <div className="pr-3 pl-3">
            {/* product img */}
            <Card className='my-3 p-3 shadow'>
                {/* use a template literal for product href */}
                <Link to={`/product/${products._id}`}>
                    <Card.Img src={products.image} variant='top' ></Card.Img> 
                </Link>
            </Card>
            {/* product title */}
            <h3>{products.year} {products.name}</h3>
            {/* product year */}
            <h4>${products.price}</h4>
            {/* product tasting notes */}
            <p><strong>Tasting Notes:</strong>"{products.notes}"</p>
            
            {/* product rating */}
            <section className='pb-2'>
                <Rating 
                    value={products.rating}
                    text={` ${products.numReviews} reviews`}
                />
            </section>

            <Link>
                <button className='secondary_button mt-2'>+Add</button>
            </Link>
            
        </div>
 
    )
}

export default Product
