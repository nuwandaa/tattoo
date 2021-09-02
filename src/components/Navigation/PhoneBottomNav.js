import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaSearch, FaEnvelope } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { NavLink } from "react-router-dom";


const Container = styled.nav `
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

    &.hidden {
      display: none;
    }

    @media (min-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.ul `
  display: flex;
    justify-content: space-around;
    align-items: center;
  width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li `
`;


const NavIcon = styled.i `
  color: ${props => props.theme.clrNavIcon};
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavBtn = styled(NavLink)
`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 0;
  background: ${props => props.theme.clrNavBg}; 
  outline: none;
  border: none;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover {
    background: ${props => props.theme.clrNavBtnBg};
  }

  &:hover ${NavIcon}{
    color: ${props => props.theme.clrNavBg};
      // transform: scale(1.2);
  }
  &:focus {
    border: 1px solid ${props => props.theme.clrNavBtnBg};
  }
  &.active {
    background: ${props => props.theme.clrNavBtnBg};
  }
  &.active ${NavIcon} {
    color: ${props => props.theme.clrNavBg};
      // transform: scale(1.2);
  }
`;

const ToggleBtn = styled.button `
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin: 0;
  background: ${props => props.theme.clrNavBg}; 
  outline: none;
  border: none;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover {
    background: ${props => props.theme.clrNavBtnBg};
  }
  &:hover ${NavIcon}{
    color: ${props => props.theme.clrNavBg};
      // transform: scale(1.2);
  }
`;

function PhoneBottomNav(props) {

    function changeTheme() {
        if (props.theme === 'light') {
            props.setTheme('dark');
        } else {
            props.setTheme('light');
        }
    }
    const location = useLocation();

    return (
        <Container className={location.pathname.split('/')[2] === 'detail' ? "hidden" : ""}>
          <NavItems>
            <NavItem>
              <NavBtn exact to="/tattoo" activeClassName="active">
                        <NavIcon><FaHome /></NavIcon>
                    </NavBtn>
            </NavItem>
            <NavItem>
              <NavBtn exact to="/tattoo/explore"  activeClassName="active">
                        <NavIcon><FaSearch /></NavIcon>
                    </NavBtn>
            </NavItem>
            <NavItem>
              <NavBtn exact to="/tattoo/contact" activeClassName="active">
                        <NavIcon><FaEnvelope /></NavIcon>
                    </NavBtn>
            </NavItem>
            <NavItem>
              <ToggleBtn onClick={changeTheme}>
                        <NavIcon>{props.theme === 'light' ? <FiMoon /> : <FiSun />}</NavIcon>
                    </ToggleBtn>
            </NavItem>
          </NavItems>
        </Container>
    )
}

export default PhoneBottomNav