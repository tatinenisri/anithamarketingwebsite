// Header.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/headerlogo.png';

const HeaderContainer = styled.header`
  background: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  width: 356px;
  height: 136px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  padding-left: 60px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #004C97 ;
  text-decoration: none;
  padding-bottom: 6px;
  border-bottom: ${props => props.active ? '6px solid #FF9E42' : '6px solid transparent'};
  transition: border-bottom 0.3s ease;

  &:hover {
    border-bottom: 6px solid #FF9E42;
  }
`;

const Header = () => {
  // Get current path for active link highlighting
  const currentPath = window.location.pathname;

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo src={headerLogo} alt="Anitha Solutions LLC" />
        </Link>
      </LogoContainer>
      <Nav>
        <NavLinks>
          <StyledLink to="/" active={currentPath === '/'}>HOME</StyledLink>
          <StyledLink to="/about" active={currentPath === '/about'}>ABOUT</StyledLink>
          <StyledLink to="/services" active={currentPath === '/services'}>SERVICES</StyledLink>
          <StyledLink to="/careers" active={currentPath === '/careers'}>CAREERS</StyledLink>
          <StyledLink to="/contact" active={currentPath === '/contact'}>CONTACT</StyledLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
