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

const AboutTitle = styled.h1`
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

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MissionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 60px 0;
  
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
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const MissionText = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const MissionImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const WhyUsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 60px 0 80px 0;
  
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
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const WhyUsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WhyUsItem = styled.li`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 12px;
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
    font-size: 15px;
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
  margin-top: 24px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const TeamImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  
  @media (max-width: 968px) {
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHero>
        <AboutTitle>About Us</AboutTitle>
      </AboutHero>

      <ContentContainer>
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
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;