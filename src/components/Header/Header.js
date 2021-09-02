import React, { useState } from 'react';
import styled from 'styled-components';
import DesktopNav from '../Navigation/DesktopNav';
import UserDropdown from './UserDropdown';
import logo from '../../assets/tattoo-logo.png';
import logoWhite from '../../assets/tattoo-logo-white.png';

const Container = styled.div `
  margin: 1rem 0;
    width: 90%;
    max-width: 1000px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (min-width: 768px) {
        padding-bottom: .8rem;
        border-bottom: 1px solid ${props => props.theme.clrBgSecondary};
    }
`;

const LogoContainer = styled.div `
    @media (min-width: 768px) {
        width: 25%;
    }
`;

const Logo = styled.img `
  width: 80px;
  max-height: 45px;
  margin: 0;
  position: absolute;
  left: 5%;
  top: -5%;
`;

const Profile = styled.div `
  display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 25%;
    }
`;

const ProfileImage = styled.img.attrs({
    src: "https://www.famousbirthdays.com/headshots/scott-lepage-5.jpg"
})
`
  min-width: 35px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 10px;
    background: ${props => props.theme.clrPaper};
`;

const ProfileText = styled.div `
  margin-left: .5em;
`;

const TextWelcome = styled.h2 `
  font-size: 14px;
  font-weight: 400;
    color: ${props => props.theme.clrFontPrimary};
`;

const TextUsername = styled.h3 `
  font-size: 12px;
    font-weight: 700;
    color: ${props => props.theme.clrFontPrimary};
`;

function Header(props) {

    const [userDropdown, setUserDropdown] = useState(false);

    function displayUserDropdown() {
        setUserDropdown(!userDropdown);
    }
    return (
        <Container>
          <LogoContainer>
            <Logo src={props.theme === 'light' ? logo : logoWhite}></Logo>
          </LogoContainer>
          <DesktopNav theme={props.theme} setTheme={props.setTheme} />
          <Profile onClick={displayUserDropdown}>
            <ProfileImage></ProfileImage>
            <ProfileText>
              <TextWelcome>Welcome Back</TextWelcome>
              <TextUsername>Scott LePage</TextUsername>
            </ProfileText>
          </Profile>
          <UserDropdown display={userDropdown}/>
        </Container>
    )
}

export default Header