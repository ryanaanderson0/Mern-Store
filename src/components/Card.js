import React from 'react'
import Card from 'react-bootstrap/Card'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 30px;
  border: 2px solid #8f384d;
  color: #8f384d;
  margin: 0 1em;
  padding: .75em 1.5em;

  ${props =>
    props.primary &&
    css`
      background: #8f384d;
      color: white;
    `};
`

const CardContent = () => {
    return( 
        <>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    <StyledButton primary>Go somewhere</StyledButton>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardContent;