import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'
import '../App.css'
import styled from 'styled-components'

const PrimaryButton = styled.button `
    width: 30%;
    padding: 10px;
    background-color: #bc4749;
    border-radius: 30px;
    color: white;
    font-family: 'Nobile', sans-serif;
    font-size: 1.25em;
    font-weight: bold;
    border: 5px solid  #b5838d;
    transition: width .5s;

    &:Hover{
        box-shadow: 5px #888888;
        width: 35%;
    }
`

const HomePage = () => {
    return (
        <div style={{backgroundColor: "#F4F1DE", paddingTop:"7%"}}>
          <h1>Latest Releases</h1> 
          <Row>
            {/* map all the product arrays contained in the products.js file and return in columns  */}
            {products.map(products => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* pass in the products.map to Product component */}
                    <Product products={products}/>
                </Col>
            ))};
          </Row>
        
         <section className="pt-5 pb-5">
             <h1 className="pb-3"><strong>Don't Drink Alone</strong></h1>
             <PrimaryButton>Join Now</PrimaryButton>
             <h4 className="pt-3">Join Now & Get 10% Off Your First Order</h4>
         </section>

          <section className="spikes_tan">
          </section>
               
        </div>
    )
}

export default HomePage
