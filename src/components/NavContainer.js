import React from 'react';
import Nav from 'react-bootstrap/Nav'

const NavContainer = () => {
        

    return(
        <>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Contact</Nav.Link>
                </Nav.Item>
            </Nav>   



        </>
    )

}

export default NavContainer;