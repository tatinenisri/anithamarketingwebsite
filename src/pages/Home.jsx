// Home.jsx
import React from 'react';
import styled from 'styled-components';
import heroBg from '../assets/herobghome.png';
import homeImage1 from '../assets/homeimage1.png';
import homeImage2 from '../assets/homeimage2.png';
import homeIcon1 from '../assets/homeicon1.png';
import homeIcon2 from '../assets/homeicon2.png';
import homeIcon3 from '../assets/homeicon3.png';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: url(${heroBg}) no-repeat center center;
  background-size: cover;
  height: 400px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
`;

const WelcomeText = styled.h1`
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

const SubTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 24px;
  line-height: 1.3;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ExploreButton = styled(Link)`
  width: 250px;
  height: 50px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ButtonText = styled.span`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  text-align: center;
`;

const AboutContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const AboutSection = styled.section`
  width: 100%;
  max-width: 1200px;
  background: #EBF6FF;
  border-radius: 6px;
  position: relative;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0 20px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const AboutHeading = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: #000000;
  margin: 0 0 20px 0;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const AboutText = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 16px;
`;

const WhyUsButton = styled(Link)`
  width: 150px;
  height: 50px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const ServicesContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  display: flex;
  justify-content: center;
`;

const ServicesSection = styled.section`
  width: 100%;
  max-width: 1200px;
  background: linear-gradient(180deg, rgba(231, 245, 255, 0.7) 23.45%, rgba(80, 168, 255, 0.7) 95.17%);
  border-radius: 6px;
  padding: 50px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const ServicesHeading = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: black;
  text-align: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled.div`
  width: 100%;
  max-width: 350px;
  background: #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 25px;
  box-sizing: border-box;
  text-align: center;
`;

const ServiceIcon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h4`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: #000000;
  text-align: center;
  margin: 0 0 16px 0;
`;

const ServiceDescription = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
  text-align: center;
  margin: 0;
`;

const Home = () => {
  const services = [
    {
      icon: homeIcon1,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs"
    },
    {
      icon: homeIcon2,
      title: "IT Consulting",
      description: "Expert guidance for your technology decisions"
    },
    {
      icon: homeIcon3,
      title: "Cloud Services",
      description: "Secure and scalable cloud infrastructure solutions"
    }
  ];

  return (
    <>
      <HeroSection>
        <ContentWrapper>
          <WelcomeText>Welcome to Anitha Solutions.</WelcomeText>
          <SubTitle>"An Unique IT Solution"</SubTitle>
          <ExploreButton to="/about">
            <ButtonText>Explore More About Us</ButtonText>
          </ExploreButton>
        </ContentWrapper>
      </HeroSection>

      <AboutContainer>
        <AboutSection>
          <AboutContent>
            <AboutHeading>About Anitha Solutions</AboutHeading>
            <AboutText>
              Anitha Solutions is a technology consulting and support company dedicated to helping 
              businesses meet their challenges. We believe technology solutions should solve 
              problems, not create them. We provide a full range of information technology services.
            </AboutText>
            <AboutText>
              Anitha Solutions has been a leading provider of Software services and solutions dedicated 
              to helping businesses meet their challenges with innovative technology approaches.
            </AboutText>
            <WhyUsButton to="/about">
              <ButtonText>Why Us?</ButtonText>
            </WhyUsButton>
          </AboutContent>
          <AboutImage src={homeImage1} alt="About Anitha Solutions" />
        </AboutSection>
      </AboutContainer>

      <ServicesContainer>
        <ServicesSection>
          <ServicesHeading>Our Services</ServicesHeading>
          <CardsContainer>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon src={service.icon} alt={service.title} />
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </CardsContainer>
        </ServicesSection>
      </ServicesContainer>

      <AboutContainer>
        <AboutSection>
          <AboutContent>
            <AboutHeading>Careers We Offer</AboutHeading>
            <AboutText>
            We deliver end-to-end software services to B2B and B2C companies globally that can be customized corresponding to your business requirements. Over the years, AnithaSolutions has associated with various industries and remains successful in retaining them to this day due to their quality-driven services.
            </AboutText>
            <WhyUsButton to="/careers">
              <ButtonText>Learn More →</ButtonText>
            </WhyUsButton>
          </AboutContent>
          <AboutImage src={homeImage2} alt="Careers at Anitha Solutions" />
        </AboutSection>
      </AboutContainer>
    </>
  );
};

export default Home;