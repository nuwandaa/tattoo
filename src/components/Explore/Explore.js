import React from 'react';
import styled from 'styled-components';
import Title from '../utils/Title';
import Search from './Search';
import Categories from './Categories';
import Recommended from './Recommended';


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
	font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.clrFontPrimary};
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

function Explore() {
    return (
        <React.Fragment>
        	<Section>
        		<Title 
        			title="Get a Tattoo"
        			subtitle="At the best price and quality"
        		/>
        	</Section>
        	<Section>
        		<Search />
        	</Section>
        	<Section>
        		<SectionTitle>
        			<SectionTitleText>Categories</SectionTitleText>
        			<SectionTitleLink>See All</SectionTitleLink>
        		</SectionTitle>
        		<Categories />
        	</Section>
        	<Section>
        		<SectionTitle>
        			<SectionTitleText>Recommended Tattoes</SectionTitleText>
        			<SectionTitleLink>See All</SectionTitleLink>
        		</SectionTitle>
        		<Recommended />
        	</Section>
        </React.Fragment>
    )
}

export default Explore