import React from 'react';
import styled from 'styled-components';


const Container = styled.div `
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  	background: ${props => props.theme.clrPaper};
  	padding: 2em 0;
  	border-radius: 5px;
`;

const DividerTitle = styled.h2 `
	font-size: 22px;
  	font-weight: 700;
  	margin-bottom: 1rem;
  	text-align: center;
  	color: ${props => props.theme.clrFontPrimary}
`;

const CtaBtn = styled.button `
	color: #fff;
	text-transform: uppercase;
	text-decoration: none;
	background: ${props => props.theme.clrBtnPrimary};
	padding: 1em 2em;
	border-radius: 50px;
	line-height: 1;
	display: inline-block;
	border: none;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: all 0.4s ease 0s;

	&:hover, &:focus {
		background: ${props => props.theme.clrBtnHover};
		letter-spacing: 1px;
		box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
		transition: all 0.4s ease 0s;
	}
`;

const Span = styled.span `
	color: ${props => props.theme.clrFontHover};
`;

function Divider() {
    return (
        <Container>
        	<DividerTitle>
        		<Span>15% OFF</Span> IN YOUR FIRST TATTOO
        	</DividerTitle>
        	<CtaBtn>FIND A TATTOO</CtaBtn>
        </Container>
    )
}

export default Divider