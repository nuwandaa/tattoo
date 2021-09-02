import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';


const Container = styled.form `
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 500px;
	height: 2.5rem;
	border-radius: 10px;
	background: ${props => props.theme.clrPaper};
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	}
`;

const SearchBtn = styled.button `
	width: 15%;
	height: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	background: transparent;
	font-size: 16px;
	cursor: pointer;
	color: ${props => props.theme.clrFontSecondary};

	&:hover {
		color: ${props => props.theme.clrFontHover};
	}

`;

const SearchIcon = styled.i `
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SearchInput = styled.input `
	width: 85%;
	height: 80%;
	font-size: 16px;
	border: none;
	background: transparent;
	color: ${props => props.theme.clrFontPrimary};

	&:focus {
		outline: none;
	}
`;

function Search() {
    return (
        <Container>
			<SearchBtn><SearchIcon><FaSearch /></SearchIcon></SearchBtn>
			<SearchInput type="text" placeholder="Search..."></SearchInput>
		</Container>
    )
}

export default Search