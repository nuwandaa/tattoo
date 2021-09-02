import React from 'react';
import styled from 'styled-components';

const Container = styled.button `
    background: ${props => props.theme.clrNavBg};
    border-radius: 30px;
    padding: .7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    position: fixed;
    bottom: 5%;
    left: calc(10% - 1.1rem);
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

    @media (min-width: 768px) {
        display: none;
    }
`;

const Span = styled.span `
    color: ${props => props.theme.clrFontHover};
    margin-left: 5px;
`;

function PhoneBottomBtn(props) {
    return (
        <Container>
            Get Tattoo <Span>Now</Span> {/*<Span>${props.price.toString()}</Span>*/}
        </Container>
    )
}

export default PhoneBottomBtn