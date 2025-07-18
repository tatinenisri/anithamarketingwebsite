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
  height: 120px;
  background: #004C97;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: calc(-50vw + 50%);
  
  @media (max-width: 768px) {
    height: 100px;
  }
`;

const ContactTitle = styled.h1`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ContactOptionsSection = styled.div`
  width: 100vw;
  min-height: 500px;
  margin-top: 60px;
  background: #E9F6FF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
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
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const ContactOption = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: 400px;
  background: #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  box-sizing: border-box;
  text-align: center;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 30px 20px;
    min-height: 300px;
  }
`;

const ContactIcon = styled.img`
  width: 150px;
  height: 120px;
  margin-bottom: 30px;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 96px;
    margin-bottom: 20px;
  }
`;

const ContactOptionTitle = styled.h3`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  text-align: center;
  margin: 0 0 16px 0;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContactOptionDescription = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  color: #333333;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ContactFormSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 80px auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ContactFormTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const FormInput = styled.input`
  width: 100%;
  height: 50px;
  background: #D6EBFF;
  border: none;
  border-radius: 6px;
  padding: 0 20px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  box-sizing: border-box;

  &::placeholder {
    color: #7BB3E8;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    background: #C5E0FF;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  background: #D6EBFF;
  border: none;
  border-radius: 6px;
  padding: 20px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #333333;
  resize: vertical;
  box-sizing: border-box;

  &::placeholder {
    color: #7BB3E8;
    font-size: 16px;
  }

  &:focus {
    outline: none;
    background: #C5E0FF;
  }
`;

const ContactButton = styled.button`
  width: 180px;
  height: 50px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border: none;
  border-radius: 6px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Contact = () => {
  const contactOptions = [
    {
      icon: contact1,
      title: "Report an Issue",
      description: "Please mail your issues to Hr@anithasolutions.net"
    },
    {
      icon: contact2,
      title: "Submit Resume",
      description: "Please mail your resumes to Ajayveerapaneni@anithasolutions.net and Hr@anithasolutions.net with the subject line having the role name"
    },
    {
      icon: contact3,
      title: "Send an Email",
      description: "Please mail your queries to Ajayveerapaneni@anithasolutions.net and Hr@anithasolutions.net with the subject line having the query"
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