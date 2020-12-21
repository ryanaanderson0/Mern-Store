import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';


const MastHead = () => {

    return(
        <div style={{backgroundColor: "#81B29A"}}>
            <Row className="py-5 mb-5">
                <Col>
                    <img src="../../assets/group_wine.png" />
                </Col>
                <Col >
                    <h1 style={{fontSize: "3.5em", marginTop: "10%"}}>Wine<strong>Friend</strong></h1>
                    <h3 style={{fontSize: "2em"}} className="py-3">Friends and wine <br/>make the perfect blend</h3>

                    <section className=" py-5">
                        <Link >
                            <button className="primary_button">Shop All Wines </button>
                        </Link>

                        <h3 style={{fontSyle:"italic" , fontSize: "1.25em"}} className=" py-2">We've got the wine covered.</h3>
                    </section>
                    
                </Col>
            </Row>
            
            <section class="spikes_green">

            </section>

        </div>
    )
}

export default MastHead;