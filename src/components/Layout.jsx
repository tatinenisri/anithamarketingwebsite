import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
