import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const SecondaryButton = styled.button `

    width: 25%;
    padding: 10px;
    background-color: transparent;
    border-radius: 30px;
    color: #bc4749;
    font-family: 'Nobile', sans-serif;
    font-size: 1.25em;
    font-weight: bold;
    border: 5px solid  #bc4749;
    transition: width .5s;

    &:Hover{
        box-shadow: 5px #888888;
        width: 30%;
    }
`


// instead of passing prop, we can destructure and have access to products prop
const Product = ({products}) => {
    return (
    
        <>
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
            <SecondaryButton>+Add</SecondaryButton>
        </>
 
    )
}

export default Product
