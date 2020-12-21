import React from 'react'
import {Row, Col} from 'react-bootstrap'


const About = () => {
    return (
        <div style={{backgroundColor: "#91ABCA", paddingTop:"6%"}}>
            <h1 className="pt-5"> About Our Wines</h1>
            <Row className="pt-5">
                <Col >
                    <h2 style={{marginTop: "15%"}}>Hi, We're from California!</h2>
                    <p className="pt-3 ml-5 mr-5">Our winemaker sources grapes from the best vineyards in the Central Coast, producing quality wines in select quantities. By producing small lots of interesting varietals and focusing on exacting standards, the winery brings premium wine to wine lovers at a competitive price. You are welcome to visit us at our winery and enjoy a wonderful experience.</p>
                </Col>

                <Col>
                    <img src="../../assets/group_wine.png"></img>
                </Col>
            </Row>

            <Row style={{ paddingTop:"6%"}}>
                <Col>
                    <img src="../../assets/wine_maker.png"></img>
                </Col>

                <Col>
                    <h2>Meet Our Wine Maker's</h2>
                </Col>
                

            </Row>

           <section className="pt-5 pb-5" style={{backgroundColor: "pink", height: "40vh"}}>
               <h2 className="pt-5 pb-5"><strong>We Are All About Quality Wine</strong></h2>
         
               <h3>Rate your wines so we can perfect your palate. <br />If you don’t like a bottle, contact us and we’ll replace it with one that you do!</h3>
           </section>
                    
               

           
        </div>
    )
}

export default About
