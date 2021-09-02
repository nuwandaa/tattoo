import React from 'react';
import styled from 'styled-components';

const Form = styled.form `
	width: 80%;
	max-width: 500px;
	margin: 0 auto;
	color: ${props=> props.theme.clrFontPrimary};
`;

const FormRow = styled.div `
	display: flex;
  	margin: 2em 0;
`;

const Field = styled.div `
	width: 100%;
	height: 40px;
	position: relative;
	padding: 0 1em;
`;

const Input = styled.input `
	display: block;
	height: 100%;
	width: 100%;
	max-width: 100%;
	position: relative;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 3px;
	background: ${props=> props.theme.clrPaper};
	color: ${props=> props.theme.clrFontPrimary};
	padding: 0 .5em;
`;

const Label = styled.label `
	position: absolute;
	top: -24px;
	font-size: 14px;
`;

const TextArea = styled.textarea `
	display: block;
	height: auto;
	width: 100%;
	max-width: 100%;
	position: relative;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 3px;
	background: ${props=> props.theme.clrPaper};
	resize: none;
	color: ${props=> props.theme.clrFontPrimary};
	padding: 0 .5em;
`;

const Button = styled.button `
	color: #fff;
	text-transform: uppercase;
	text-decoration: none;
	background: ${props => props.theme.clrBtnPrimary};
	padding: 1em 2em;
	margin: 2.5em auto;
	width: 80%;
	border-radius: 50px;
	line-height: 1;
	display: inline-block;
	border: none;
	font-size: 16px;
	font-weight: 700;
	cursor: pointer;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	transition: all 0.4s ease 0s;

	&:hover, &:focus {
		background: ${props => props.theme.clrBtnHover};
		letter-spacing: 1px;
		box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
		transition: all 0.4s ease 0s;
	}
`;

function RegisterForm() {
    return (
        <Form>
			<FormRow>
				<Field>
					<Input></Input>
					<Label>Full Name</Label>
				</Field>
			</FormRow>
			<FormRow>
				<Field>
					<Input></Input>
					<Label>Phone Number</Label>
				</Field>
			</FormRow>
			<FormRow>
				<Field>
					<Input></Input>
					<Label>Email</Label>
				</Field>
			</FormRow>
			<FormRow>
				<Field>
					<Input></Input>
					<Label>Password</Label>
				</Field>
			</FormRow>
			<FormRow>
				<Button>Register</Button>
			</FormRow>
		</Form>
    )
}

export default RegisterForm