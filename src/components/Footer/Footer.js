import React from 'react';
import styled from 'styled-components';

const Container = styled.footer `
	height: 50vh;
	font-size: 14px;
	color: ${props=>props.theme.clrFontSecondary};
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Footer() {
    return (
        <Container>
			Tattoo 2021 - Copyright All rights reserved
		</Container>
    )
}

export default Footer