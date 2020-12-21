import React from 'react'
import { Row, Col} from 'react-bootstrap'
import products from '../products.js'
import Product from '../components/Product'
import '../App.css'
import MastHead from '../components/MastHead'
import About from '../components/About'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <div style={{backgroundColor: "#F4F1DE"}}>

          <MastHead />


          <h1 style={{paddingTop: '7%'}}>Latest Releases</h1> 
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

             <Link>
                <button className="primary_button">Join Now</button>
             </Link>
             
             <h4 className="pt-3">Join Now & Get 10% Off Your First Order</h4>
         </section>

          <section className="spikes_tan">
          </section>

          <About />
               
        </div>
    )
}

export default HomePage
