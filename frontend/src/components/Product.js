import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'

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
            <Card className='my-3 p-3 shadow'>
                {/* use a template literal for product href */}
                <a href={`/product/${products._id}`}>
                    <Card.Img src={products.image} variant='top' ></Card.Img> 
                </a>
                
            </Card>
            <h3>{products.name}</h3>
            <h4>-{products.year}-</h4>
           <p><strong>Tasting Notes:</strong>"{products.notes}"</p>
            <SecondaryButton>+Add</SecondaryButton>
        </>
 
    )
}

export default Product
