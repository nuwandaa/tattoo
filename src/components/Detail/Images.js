import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
	margin: 1rem 0;
  	width: 90%;
  	max-width: 1000px;
`;

const Title = styled.h2 `
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 1em;
	color: ${props => props.theme.clrFontPrimary}
`;

function Images() {
    return (
        <Container>
        	<Title>Pictures</Title>
        </Container>
    )
}

export default Images