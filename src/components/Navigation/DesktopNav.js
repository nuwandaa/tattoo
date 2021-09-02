import React from 'react';
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';


const Container = styled.nav `
	display: none;
  	width: 50%;
  	text-align: center;

  	@media (min-width: 768px) {
		display: block;
	}
`;

const NavItems = styled.ul `
	display: flex;
  	justify-content: space-around;
  	align-items: center;
  	width: 100%;
`;

const NavItem = styled.li `
	list-style: none;
  	position: relative;
`;

const NavItemLink = styled(NavLink)
`
	text-decoration: none;
  	color: ${props => props.theme.clrFontPrimary};
  	font-weight: 400;
  	font-size: 16px;
  	padding: .5em .5em;
  	border-radius: 10px;

  	&:hover, &.active {
  		color: ${props => props.theme.clrFontHover};
  	}

  	&.active:after {
  		content: "";
		width: 100%;
		height: 2px;
		background: ${props => props.theme.clrFontHover};
		position: absolute;
		bottom: -21px;
		left: 0;
		right: 0;
		margin: auto;
  	}
`;

const ToggleBtn = styled.button `
	border-radius: 50%;
	margin: 0;
	color: ${props => props.theme.clrFontPrimary};
	background: ${props => props.theme.clrBgPrimary};
	outline: none;
	border: none;
	font-size: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: all .2s ease-in-out;
	&:hover {
		color: ${props => props.theme.clrFontHover};
	}
`;

function DesktopNav(props) {

    function changeTheme() {
        if (props.theme === 'light') {
            props.setTheme('dark');
        } else {
            props.setTheme('light');
        }
    }

    return (
        <Container>
			<NavItems>
				<NavItem>
					<NavItemLink exact to='/tattoo' activeClassName="active">Home</NavItemLink>
				</NavItem>
				<NavItem>
					<NavItemLink exact to='/tattoo/explore' activeClassName="active">Explore</NavItemLink>
				</NavItem>
				<NavItem>
					<NavItemLink exact to='/tattoo/contact' activeClassName="active">Contact</NavItemLink>
				</NavItem>
				<NavItem>
					<ToggleBtn onClick={changeTheme}>{props.theme === 'light' ? <FiMoon /> : <FiSun />}</ToggleBtn>
				</NavItem>
			</NavItems>
		</Container>
    )
}

export default DesktopNav