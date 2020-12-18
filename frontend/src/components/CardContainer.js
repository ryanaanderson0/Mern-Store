import React from 'react';
import CardContent from './Card.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const CardContainer = () => {

    return(
        <>
        <Container fluid>
            <Row>
                <Col xs={12} md={4}>
                    <CardContent />
                </Col>
                <Col xs={12} md={4}>
                    <CardContent />
                </Col>
                <Col xs={12} md={4}>
                    <CardContent />
                </Col>
            </Row>

        </Container>
          
        </>
    )
}
export default CardContainer;