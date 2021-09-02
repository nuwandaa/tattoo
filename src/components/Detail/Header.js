import React from 'react'
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import BackBtn from './BackBtn';

const Container = styled.div `
	margin: 1rem 0;
  	width: 90%;
  	max-width: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	@media (min-width: 768px) {
        flex-direction: row-reverse;
    }
`;

const Image = styled.img `
	width: 100%;
	height: auto;
	border-radius: 15px;
	max-width: 500px;
	max-height: 500px;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const HeaderBox = styled.div `
	width: 70%;
	max-width: 400px;
	height: auto;
	max-height: 200px;
	background: ${props => props.theme.clrPaper};
	position: absolute;
	bottom: -5%;
	border-radius: 15px;
	padding: 1em;
	box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px;
	overflow: hidden;

	@media (min-width: 768px) {
        left: 10%;
        bottom: auto;
        width: 200px;
    }
`;

const HeaderTop = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.h1 `
	font-size: 16px;
	color: ${props => props.theme.clrFontPrimary}
`;

const Stars = styled.p `
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 400;
	color: ${props => props.theme.clrFontSecondary};
`;
const StarIcon = styled.i `
	color: rgba(255, 200, 0, 1);
	margin-right: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Categories = styled.div `
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-top: 1em;
	flex-wrap: wrap;
	line-height: 1.5;
`;


const Category = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CategoryIcon = styled.i `
`;

const CategoryName = styled.p `
	margin-left: .5em;
	color: ${props => props.theme.clrFontSecondary};
`;

const CtaBtn = styled.button `
	background: ${props => props.theme.clrBtnPrimary};
    border-radius: 30px;
    padding: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em auto;
    width: 80%;
    box-shadow: rgba(100, 100, 100, 0.2) 0px 2px 8px 0px;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.4s ease 0s;

    &:hover, &:focus {
        background: ${props => props.theme.clrBtnHover};
        letter-spacing: 1px;
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const Span = styled.span `
    color: ${props => props.theme.clrFontHover};
    margin-left: 5px;
`;

function Header(props) {
    return (
        <Container>
        	<Image src={props.mainImage}></Image>
        	<BackBtn goBack={props.goBack}/>
        	<HeaderBox>
        		<HeaderTop>
        			<Title>{props.title}</Title>
        			<Stars><StarIcon><FaStar /></StarIcon>{props.stars}</Stars>
        		</HeaderTop>
        		<Categories>
        			<Category>
        				<CategoryIcon>Icon</CategoryIcon>
        				<CategoryName>Coloured</CategoryName>
        			</Category>
        			<Category>
        				<CategoryIcon>Icon</CategoryIcon>
        				<CategoryName>Minimalistic</CategoryName>
        			</Category>
        			<Category>
        				<CategoryIcon>Icon</CategoryIcon>
        				<CategoryName>B & W</CategoryName>
        			</Category>
        			<Category>
        				<CategoryIcon>Icon</CategoryIcon>
        				<CategoryName>Minimalistic</CategoryName>
        			</Category>
        		</Categories>
        		<CtaBtn>Get it <Span>Now</Span></CtaBtn>
        	</HeaderBox>
        </Container>
    )
}

export default Header