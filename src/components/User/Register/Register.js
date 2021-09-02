import React from 'react';
import styled from 'styled-components';
import Title from '../utils/Title';
import RegisterForm from './RegisterForm';

const Section = styled.section `
	margin: 1rem 0;
  	width: 90%;
  	max-width: 1000px;
  	height: auto;
`;

function Register() {
    return (
        <React.Fragment>
        	<Section>
    			<Title title="Register free"
    		          subtitle="And get your tattoo" />
        	</Section>
        	<Section>
        		<ContactForm />
        	</Section>
        </React.Fragment>
    )
}

export default Register