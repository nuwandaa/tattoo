import React from 'react'
import styled from 'styled-components';

const Container = styled.div `
	padding: 0 2em;
	margin: 2rem 0;
  	width: 90%;
  	max-width: 1000px;
`;

const Title = styled.h2 `
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 1em;
	color: ${props => props.theme.clrFontPrimary}
`;

const Text = styled.p `
	color: ${props => props.theme.clrFontSecondary}
`;

function Description(props) {
    return (
        <Container>
			<Title>Description</Title>
			<Text>{props.text}</Text>
		</Container>
    )
}

export default Description