import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header style={{backgroundColor:"white"}}>
            <Navbar className="justify-content-center" activeKey="/home">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>MERN Wine Shoppe</Navbar.Brand>
                    </LinkContainer>
                    
                    <Nav className="mr-auto">
                        <LinkContainer to='/shop'>
                            <Nav.Link eventKey="link-1">Shop</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/about'>
                            <Nav.Link eventKey="link-2">About</Nav.Link>
                        </LinkContainer>
                    </Nav>

                    <Nav className="ml-auto">
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/login'>
                            <Nav.Link eventKey="link-1"><i className='far fa-smile'></i> Sign In</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to='/subscribe'>
                            <button>Make A Friend</button>
                        </LinkContainer>
                        
                    </Nav>
                </Container>  
            </Navbar>
        </header>
    )
}

export default Header;
