import React from 'react';
import styled from 'styled-components';
import contact1 from '../assets/contact-1.png';
import contact2 from '../assets/contact-2.png';
import contact3 from '../assets/contact-3.png';

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactHero = styled.div`
  width: 100vw;
  height: 257px;
  background: #004C97;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
`;

const ContactTitle = styled.h1`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 96px;
  line-height: 150%;
  letter-spacing: -2.3%;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 64px;
  }
  
  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const ContactOptionsSection = styled.div`
  width: 100vw;
  min-height: 662px;
  margin-top: 50px;
  background: #E9F6FF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  box-sizing: border-box;
  margin-left: calc(-50vw + 50%);
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
    padding: 40px 20px;
  }
`;

const ContactOptionsContainer = styled.div`
  width: 100%;
  max-width: 1548px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ContactOption = styled.div`
  width: 100%;
  max-width: 448px;
  min-height: 496px;
  background: #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 20px 20px 20px;
  box-sizing: border-box;
  
  @media (max-width: 1200px) {
    max-width: 400px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 40px 20px;
  }
`;

const ContactIcon = styled.img`
  width: 237px;
  height: 195px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    width: 180px;
    height: 148px;
    margin-bottom: 40px;
  }
`;

const ContactOptionTitle = styled.h3`
  width: 100%;
  max-width: 311px;
  font-family: 'Avenir Next';
  font-weight: 600;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -2.2%;
  text-align: center;
  margin: 0 0 20px 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ContactOptionDescription = styled.p`
  font-family: 'Avenir Next';
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -1.9%;
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContactFormSection = styled.div`
  width: 100%;
  max-width: 1552px;
  margin-top: 80px;
  padding: 0 64px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContactFormTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  max-width: 1104px;
  height: 60px;
  background: #D6EBFF;
  border: none;
  border-radius: 6px;
  padding: 0 20px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #7BB3E8;
  box-sizing: border-box;

  &::placeholder {
    color: #7BB3E8;
    font-size: 18px;
  }

  &:focus {
    outline: none;
    background: #C5E0FF;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  max-width: 1104px;
  height: 120px;
  background: #D6EBFF;
  border: none;
  border-radius: 6px;
  padding: 20px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #7BB3E8;
  resize: vertical;
  box-sizing: border-box;

  &::placeholder {
    color: #7BB3E8;
    font-size: 18px;
  }

  &:focus {
    outline: none;
    background: #C5E0FF;
  }
`;

const ContactButton = styled.button`
  width: 197px;
  height: 68px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border: none;
  border-radius: 6px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContactFooter = styled.div`
  width: 100%;
  background: #004C97;
  margin-top: 100px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 40px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  margin-bottom: 40px;
`;

const FooterContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #FFFFFF;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const FooterLink = styled.a`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #FFFFFF;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FooterCopyright = styled.div`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
`;

const Contact = () => {
  const contactOptions = [
    {
      icon: contact1,
      title: "Report an Issue",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: contact2,
      title: "Submit Resume",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: contact3,
      title: "Send an Email",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <ContactContainer>
      <ContactHero>
        <ContactTitle>Contact</ContactTitle>
      </ContactHero>

      <ContactOptionsSection>
        <ContactOptionsContainer>
          {contactOptions.map((option, index) => (
            <ContactOption key={index}>
              <ContactIcon src={option.icon} alt={option.title} />
              <ContactOptionTitle>{option.title}</ContactOptionTitle>
              <ContactOptionDescription>{option.description}</ContactOptionDescription>
            </ContactOption>
          ))}
        </ContactOptionsContainer>
      </ContactOptionsSection>

      <ContactFormSection>
        <ContactFormTitle>Contact Us For More Questions & Concerns:</ContactFormTitle>
        <ContactForm>
          <FormInput 
            type="text" 
            placeholder="Full Name" 
          />
          <FormInput 
            type="text" 
            placeholder="Email / Phone Number" 
          />
          <FormTextarea 
            placeholder="Message"
            rows={4}
          />
          <ContactButton type="submit">Contact Us</ContactButton>
        </ContactForm>
      </ContactFormSection>
    </ContactContainer>
  );
};

export default Contact;
