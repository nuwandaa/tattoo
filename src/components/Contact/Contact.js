import React from 'react';
import styled from 'styled-components';
import Title from '../utils/Title';
import ContactForm from './ContactForm';

const Section = styled.section `
	margin: 1rem 0;
  	width: 90%;
  	max-width: 1000px;
  	height: auto;
`;

function Contact() {
    return (
        <React.Fragment>
        	<Section>
    			<Title title="Contact Us"
    		          subtitle="And get your tattoo" />
        	</Section>
        	<Section>
        		<ContactForm />
        	</Section>
        </React.Fragment>
    )
}

export default Contact