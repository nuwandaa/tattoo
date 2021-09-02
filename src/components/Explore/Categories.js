import React from 'react';
import styled from 'styled-components';
import { FaTint, FaPalette } from 'react-icons/fa';


const CategoriesList = styled.div `
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	overflow-x: auto;
`;

const CategoryBtn = styled.button `
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 40%;
	max-width: 130px;
	min-width: 105px;
	padding: 0.5rem;
	margin: 1rem;
	margin-left: 0;
	border: none;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px;
	background: ${props => props.theme.clrPaper};
	cursor: pointer;
	transition: all 250ms ease-in-out;

	&:hover, &:focus {
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	  	outline: none;
	}
`;

const CategoryIcon = styled.i `
	width: 20%;
	transition: all 250ms ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.clrFontPrimary};

	${CategoryBtn}:hover &, ${CategoryBtn}:focus & {
		color: ${props => props.theme.clrFontHover};
	}
`;

const CategoryName = styled.p `
	width: 80%;
	color: ${props => props.theme.clrFontPrimary};
`;

function Categories() {
    return (
        <CategoriesList>
			<CategoryBtn>
				<CategoryIcon><FaTint /></CategoryIcon>
				<CategoryName>B & W</CategoryName>
			</CategoryBtn>
			<CategoryBtn>
				<CategoryIcon><FaPalette /></CategoryIcon>
				<CategoryName>Coloured</CategoryName>
			</CategoryBtn>
			<CategoryBtn>
				<CategoryIcon><FaPalette /></CategoryIcon>
				<CategoryName>Minimalistic</CategoryName>
			</CategoryBtn>
			<CategoryBtn>
				<CategoryIcon><FaPalette /></CategoryIcon>
				<CategoryName>Coloured</CategoryName>
			</CategoryBtn>

		</CategoriesList>
    )
}

export default Categories