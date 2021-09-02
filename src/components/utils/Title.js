import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
  	text-align: left;
  	float: left;
`;

const TitleText = styled.h1 `
	font-size: 26px;
  	font-weight: 900;
  	color: ${props => props.theme.clrFontPrimary};
`;

const Subtitle = styled.h2 `
	font-size: 16px;
  	font-weight: 300;
 	color: ${props => props.theme.clrFontSecondary};
`;

function Title(props) {
    return (
        <Container>
			<TitleText>{props.title}</TitleText>
			<Subtitle>{props.subtitle}</Subtitle>
		</Container>
    )
}

export default Title