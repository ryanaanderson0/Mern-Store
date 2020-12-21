import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header style={{backgroundColor:"white" }} >
            <Navbar className="justify-content-center shadow-lg" activeKey="/home">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <h1 style={{fontSize: '1em'}}>Wine<strong>Friend</strong></h1>
                        </Navbar.Brand>
                    </LinkContainer>
                    
                    <Nav className="mr-auto">
                        <LinkContainer to='/shop'>
                            <Nav.Link eventKey="link-1">Shop</Nav.Link>
                        </LinkContainer>

                    </Nav>

                    <Nav className="ml-auto">
                        <LinkContainer to='/cart' className='p-3'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/login' className='p-3 ' style={{ width: "100px"}}>
                            <Nav.Link eventKey="link-1" ><i className='far fa-smile'></i> Sign In</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/subscribe' >
                            <button className="tertiary_button">Make A Friend</button>
                        </LinkContainer>
                        
                    </Nav>
                </Container>  
            </Navbar>
        </header>
    )
}

export default Header;
