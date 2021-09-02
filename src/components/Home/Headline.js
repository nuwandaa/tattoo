import React from 'react';
import styled from 'styled-components';
import image from '../../assets/shop.jpg';

const Container = styled.div `
	max-width: 100%;
	text-align: center;
	position: relative;
`;

const HeadlineImg = styled.img `
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-color: #000;
	background-color: ${props => props.theme.clrPaper};
	width: 100%;
	// max-width: 600px;
	height: auto;
	max-height: 450px;
	// min-height: 200px;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

	@media (max-width: 1024px) {
		max-height: 400px;
	}
`;

function Headline() {
    return (
        <Container>
			<HeadlineImg src={image}></HeadlineImg>
		</Container>
    )
}

export default Headline