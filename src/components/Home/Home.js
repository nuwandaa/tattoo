import React from 'react';
import styled from 'styled-components';
import Title from '../utils/Title';
import Headline from './Headline';
import Divider from './Divider';
import Locations from './Locations';
import Staff from './Staff';

const Section = styled.section `
	margin: 1rem 0;
  	width: 90%;
  	max-width: 1000px;
  	height: auto;
`;

const SectionTitle = styled.div `
	display: flex;
  	justify-content: space-between;
  	align-items: center;
  	margin: 1rem 0;
`;

const SectionTitleText = styled.h2 `
  color: ${props => props.theme.clrFontPrimary};
	font-size: 16px;
  font-weight: 700;
`;

const SectionTitleLink = styled.a `
	font-size: 14px;
  	text-decoration: none;
  	color: ${props => props.theme.clrFontSecondary};
  	transition: all 150ms ease-in-out;

  	&:hover {
  		color: ${props => props.theme.clrFontHover};
  	}
`;

function Home() {
    return (
            <React.Fragment> 
            	<Section>
            		<Title
                  title="Welcome to Tattoo"
                  subtitle="The best tattoo shop of Argentina" 
                />
            	</Section>
            	<Section>
            		<Headline />
            	</Section>
	    		<Section>
	    			<Divider />
	    		</Section>
	    		<Section>
	    			<SectionTitle>
	    				<SectionTitleText>Staff</SectionTitleText>
	    				<SectionTitleLink>See all</SectionTitleLink>
	    			</SectionTitle>
	    			<Staff />
	    		</Section>
	    		<Section>
	    			<SectionTitle>
	    				<SectionTitleText>Where to find us</SectionTitleText>
	    			</SectionTitle>
	    			<Locations />
	    		</Section>
	    	</ React.Fragment>
    )
}

export default Home;