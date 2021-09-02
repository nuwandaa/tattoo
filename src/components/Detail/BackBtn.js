import React from 'react'
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

const Container = styled.button `
    background: ${props => props.theme.clrPaper};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5%;
    //left: calc(10% - 1.1rem);
    left: 5%;
    box-shadow: rgba(100, 100, 100, 0.2) 0px 2px 8px 0px;
    border: none;
    color: ${props => props.theme.clrFontPrimary};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.4s ease 0s;

    &:hover, &:focus {
        background: ${props => props.theme.clrBtnHover};
        color: ${props => props.theme.clrFontHover};
        letter-spacing: 1px;
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }


`;

function BackBtn(props) {
    return (
        <Container onClick={props.goBack}>
        	<FaChevronLeft />
        </Container>
    )
}

export default BackBtn