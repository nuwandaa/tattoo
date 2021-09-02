import React from 'react'
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Container = styled.div `
  	
`;

const LocationsList = styled.ul `

`;

const LocationItem = styled.li `
	list-style: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: ${props => props.theme.clrFontSecondary};
	margin-bottom: .5rem;
`;

const LocationLink = styled.a `
	text-decoration: none;
	color: ${props => props.theme.clrFontSecondary};
	margin-left: .5rem;

	&:hover {
		color: ${props => props.theme.clrFontHover};
	}
`;

function Locations() {
    return (
        <Container>
			<LocationsList>
				<LocationItem>
					<FaMapMarkerAlt />
					<LocationLink>Av. Libertador 1022 CABA, Argentina</LocationLink>
				</LocationItem>
				<LocationItem>
					<FaMapMarkerAlt />
					<LocationLink>Royal St. 22 New York, USA</LocationLink>
				</LocationItem>
			</LocationsList>
		</Container>
    )
}

export default Locations