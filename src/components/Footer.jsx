import React from 'react';
import styled from 'styled-components';
import footerbg from '../assets/footerbg.png';

const FooterContainer = styled.footer`
  width: 100%;
  background: url(${props => props.bgimage}) no-repeat center center;
  background-size: cover;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 40px;
  box-sizing: border-box;
  margin: 20px auto;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color:rgb(255, 255, 255);
  margin-bottom: 32px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContactInfo = styled.div`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color:rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  color:rgb(255, 255, 255);
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -2.2%;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const Link = styled.a`
  color:rgb(255, 255, 255);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer bgimage={footerbg}>
      <Title>Contact Us! We Are More Than Happy To Reach Out.</Title>
      <ContactInfo>
        <div>📍 Acme Corp, 123 Main Street, Anytown, CA 43068</div>
        <div>📞 +1 123-456-7890</div>
        <div>✉️ fakeexampleemail@gmail.com</div>
      </ContactInfo>
      <FooterBottom>
        <div>© 2025 Anitha Solutions LLC. All Rights Reserved.</div>
        <FooterLinks>
          <Link href="/terms">Terms & Privacy</Link>
          <Link href="/cookies">Manage Cookies</Link>
        </FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
