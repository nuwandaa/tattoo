import React from 'react';
import styled from 'styled-components';


const Card = styled.div `
	min-width: 250px;
	width: 250px;
	height: 250px;
	padding: 0.7rem;
	margin-bottom: 1rem;
	border-radius: 15px;
	// box-shadow: ${props => props.theme.cardBoxShadow};
	background-image: url(${props=>props.bg});
	background-size: cover;
	background-position: center;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	margin-right: 1em;
`;

const CardContent = styled.div `
	width: 80%;
	background: ${props => props.theme.cardContentBg};
	padding: .7em;
	border-radius: 15px;
	backdrop-filter: blur(8px);
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const CardTitle = styled.h2 `
	font-size: 18px;
	font-weight: 700;
	color: ${props => props.theme.clrFontPrimary};
	float: left;
	width: 100%;
`;

const CardDescription = styled.p `
	font-size: 14px;
	color: ${props => props.theme.clrFontSecondary};
	float: left;
`;

const CardBtn = styled.button `
	float: right;
	background: ${props => props.theme.clrBtnPrimary};
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: .5em 1em;
	font-size: 12px;
	font-weight: 700;
	margin-top: .5rem;
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

function CardTypeOne(props) {
    return (
        <Card bg={props.bg}>
			<CardContent>
				<CardTitle>{props.title}</CardTitle>
				<CardDescription>{props.description}</CardDescription>
				<CardBtn>{props.btn}</CardBtn>
			</CardContent>
		</Card>
    )
}

export default CardTypeOne