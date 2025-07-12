import React from 'react';
import styled from 'styled-components';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutHero = styled.div`
  width: 100vw;
  height: 257px;
  background: #004C97;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
`;

const AboutTitle = styled.h1`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
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

const MissionSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin: 80px 0;
  padding: 0 20px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

const MissionContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const MissionTitle = styled.h2`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #000000;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const MissionText = styled.p`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #000000;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const MissionImage = styled.img`
  width: 100%;
  max-width: 460px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const WhyUsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
  margin: 80px 0 120px 0;
  padding: 0 20px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

const WhyUsContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const WhyUsTitle = styled.h2`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #000000;
  margin-bottom: 32px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const WhyUsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WhyUsItem = styled.li`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #000000;
  margin-bottom: 16px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: "•";
    color: #004C97;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ContactButton = styled.button`
  width: 200px;
  height: 60px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border: none;
  border-radius: 6px;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 30px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TeamImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  
  @media (max-width: 968px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <AboutTitle>About Us</AboutTitle>
      </AboutHero>

      <MissionSection>
        <MissionContent>
          <MissionTitle>Our mission</MissionTitle>
          <MissionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin 
            eu. Nulla lacinia a ex in rhoncus. Quisque vitae viverra nisl, 
            non lacinia elit. Suspendisse iaculis enim vel eros blandit, 
            ultrices vehicula ante scelerisque. Nulla facilisi. Proin sit 
            amet augue eu metus pharetra rutrum. Interdum et malesuada 
            fames ac ante ipsum primis in faucibus.
          </MissionText>
          <MissionText>
            Aenean id ipsum leo. Vestibulum ultrices eleifend nulla, sed 
            aliquet massa malesuada at. Morbi vel posuere nisl. Donec a 
            tortor sit amet mi sollicitudin aliquam. Proin at eros eu mauris 
            interdum feugiat ac eu purus. Duis egestas justo, sed 
            condimentum lacus turpis ut metus.
          </MissionText>
        </MissionContent>
        <MissionImage src={about1} alt="Our mission" />
      </MissionSection>

      <WhyUsSection>
        <WhyUsContent>
          <WhyUsTitle>Why us?</WhyUsTitle>
          <WhyUsList>
            <WhyUsItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WhyUsItem>
            <WhyUsItem>Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin.</WhyUsItem>
            <WhyUsItem>Duis auctor erat vel tellus porttitor, vel fermentum tellus tincidunt.</WhyUsItem>
            <WhyUsItem>Pellentesque pharetra felis et elit cursus, nec auctor odio facilisis.</WhyUsItem>
          </WhyUsList>
          <ContactButton>Let's Connect →</ContactButton>
        </WhyUsContent>
        <TeamImage src={about2} alt="Why choose us" />
      </WhyUsSection>
    </AboutContainer>
  );
};

export default About;