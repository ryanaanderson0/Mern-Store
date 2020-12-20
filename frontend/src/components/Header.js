import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return (
        <header style={{backgroundColor:"white"}}>
            <Navbar className="justify-content-center" activeKey="/home">
                <Container>
                    <Navbar.Brand href='/'>MERN Wine Shoppe</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link eventKey="link-1">Shop</Nav.Link>
                        <Nav.Link eventKey="link-2">About</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/home"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                        <Nav.Link eventKey="link-1"><i className='far fa-smile'></i> Sign In</Nav.Link>
                    </Nav>
                </Container>  
            </Navbar>
        </header>
    )
}

export default Header;
