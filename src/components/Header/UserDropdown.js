import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
	display: block;
	position: absolute;
	width: 130px;
	right: calc(10% - 3rem);
	top: 50px;
	background: ${props => props.theme.clrPaper
};
	box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 5px;
	border-radius: 15px;
	&.hidden {
      display: none;
    }
`;

const List = styled.ul `
	list-style: none;
	width: 100%;
`;

const ListLink = styled.a `
	color: ${props => props.theme.clrFontPrimary};
	text-decoration: none;
  	padding-left: 1rem;
`;

const ListItem = styled.li `
	padding: .8rem 0;
	width: 100%;
	border-radius: 15px;
	&:hover, &.active {
  		background: ${props => props.theme.clrPaperHover};
  	}

  	&:hover ${ListLink} {
  		color: ${props => props.theme.clrFontHover};
  	}
`;

function UserDropdown(props) {

    const display = props.display === true ? '' : 'hidden';
    return (
        <Container className={display}>
        	<List>
        		<ListItem>
        			<ListLink href="/register">Register</ListLink>
        		</ListItem>
        		<ListItem>
        			<ListLink href="/login">Login</ListLink>
        		</ListItem>
        		<ListItem>
        			<ListLink href="/logout">Logout</ListLink>
        		</ListItem>
        	</List>
        </Container>
    )
}

export default UserDropdown