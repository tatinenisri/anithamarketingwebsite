import React from 'react';
import styled from 'styled-components';
import footerbg from '../assets/footerbg.png';

const FooterContainer = styled.footer`
  width: 100vw;
  background: url(${props => props.bgimage}) no-repeat center center;
  background-size: cover;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-left: calc(-50vw + 50%);
  margin-top: 0;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: rgb(255, 255, 255);
  margin-bottom: 24px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 1.4;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
    justify-content: center;
  }
`;

const Link = styled.a`
  color: rgb(255, 255, 255);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer bgimage={footerbg}>
      <FooterContent>
        <Title>Contact Us! We Are More Than Happy To Reach Out.</Title>
        <ContactInfo>
          <div>📍 Haslett, MI, 48840</div>
          <div>📞 +1  517-331-9549</div>
          <div>✉️ Ajayveerapaneni@anithasolutions.net</div>
        </ContactInfo>
        <FooterBottom>
          <div>© 2025 Anitha Solutions LLC. All Rights Reserved.</div>
          <FooterLinks>
            <Link href="/terms">Terms & Privacy</Link>
            <Link href="/cookies">Manage Cookies</Link>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;