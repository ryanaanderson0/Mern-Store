import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styled, { css } from 'styled-components'

const StyledJumbotron = styled.div`
    color: #fff;
    background: linear-gradient(30deg, #ffd5cd 40%, #214252 40%);
    padding: 150px 150px;
`
const StyledHeader = styled.h1`
  color: #8f384d;
  font-size: 4em;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
`



const JumbotronContainer = () => {

    return(
        <>
        <StyledJumbotron>
        
                <StyledHeader>Hello, world!</StyledHeader>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>

        </StyledJumbotron>
        </>
    )
}

export default JumbotronContainer;