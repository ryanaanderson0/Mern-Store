import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import styled, { css } from 'styled-components'

const StyledJumbotron = styled.div`
  background: #5c6e91;
  padding: 150px 150px;
  background: linear-gradient(
    to right, 
    #5c6e91 0%, 
    #5c6e91 50%, 
    #f4d9c6 50%, 
    #f4d9c6
     100%
  );
`
const StyledHeader = styled.h1`
  color: #8f384d;
  font-size: 3.5em;
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