// Header.jsx
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../assets/headerlogo.png';

const HeaderContainer = styled.header`
  background: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    gap: 20px;
  }
`;

const LogoContainer = styled.div`
  width: 280px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 240px;
    height: 80px;
  }
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
  padding-left: 40px;
  
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -1%;
  color: #004C97;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: ${props => props.active ? '3px solid #FF9E42' : '3px solid transparent'};
  transition: border-bottom 0.3s ease;

  &:hover {
    border-bottom: 3px solid #FF9E42;
  }
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Link to="/">
          <Logo src={headerLogo} alt="Anitha Solutions LLC" />
        </Link>
      </LogoContainer>
      <Nav>
        <NavLinks>
          <StyledLink to="/" active={location.pathname === '/'}>HOME</StyledLink>
          <StyledLink to="/about" active={location.pathname === '/about'}>ABOUT</StyledLink>
          <StyledLink to="/services" active={location.pathname === '/services'}>SERVICES</StyledLink>
          <StyledLink to="/careers" active={location.pathname === '/careers'}>CAREERS</StyledLink>
          <StyledLink to="/contact" active={location.pathname === '/contact'}>CONTACT</StyledLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;