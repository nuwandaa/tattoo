import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Card = styled.div `
	max-width: 130px;
	width: 130px;
	padding: 0.7rem;
	margin: 1rem;
	margin-left: 0;
	border: none;
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px;
	background: ${props => props.theme.clrPaper};
`;

const CardLink = styled(Link)
`
`;

const CardImage = styled.img `
	max-width: 100%;
	border-radius: 15px;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	margin-bottom: .2em;
	cursor: pointer;
`;

const CardContent = styled.div `
`;

const CardTitle = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: .5em 0;
`;

const CardTitleText = styled.h2 `
	font-size: 14px;
	font-weight: 700;
	width: 70%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${props => props.theme.clrFontPrimary}
`;

const Stars = styled.div `
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 30%;
	font-size: 13px;
	font-weight: 900;
	color: rgba(255, 200, 0, 1);
	overflow: hidden;
`;

const StarsIcon = styled.i ``;

const StarsNumber = styled.div ``;

const CardSubtitle = styled.div `
	width: 80%;
	font-size: 12px;
	font-weight: 700;
	color: ${props => props.theme.clrFontSecondary};
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;


function CardTypeTwo(props) {
    return (
        <Card>
			<CardLink exact to={props.link}>
				<CardImage src={props.image}></CardImage>
			</CardLink>
			<CardContent>
				<CardTitle>
					<CardTitleText>{props.title}</CardTitleText>
					<Stars>
						<StarsIcon><FaStar /></StarsIcon>
						<StarsNumber>{props.stars.toString()}</StarsNumber>
					</Stars>
				</CardTitle>
				<CardSubtitle>{props.subtitle}</CardSubtitle>
			</CardContent>
		</Card>
    )
}

export default CardTypeTwo