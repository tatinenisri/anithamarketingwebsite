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
  height: 377px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 1552px;
  width: 100%;
  padding: 0 20px;
`;

const WelcomeText = styled.h1`
  width: 100%;
  max-width: 1465px;
  height: 120px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 80px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled.h2`
  width: 100%;
  max-width: 1064px;
  height: 69px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 46px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
`;

const ExploreButton = styled(Link)`
  width: 304px;
  height: 68px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
`;

const ButtonText = styled.span`
  width: 128px;
  height: 36px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 170%;
  letter-spacing: -1.9%;
  color: #FFFFFF;
  text-align: center;
`;

const AboutContainer = styled.div`
  width: 100%;
  padding: 200px 0;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

const AboutSection = styled.section`
  width: 1258px;
  height: 431px;
  background: #EBF6FF;
  border-radius: 6px;
  position: relative;
  padding: 57px 55px;
  box-sizing: border-box;
  margin-left: -250px;
`;

const AboutHeading = styled.h2`
  width: 825px;
  height: 72px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #000000;
  margin: 0;
`;

const AboutText = styled.p`
  width: 949px;
  height: 180px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #000000;
  margin-top: 8px;
`;

const WhyUsButton = styled(Link)`
  width: 168px;
  height: 68px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 27px;
`;

const AboutImage = styled.img`
  width: 463px;
  height: 455.25px;
  position: absolute;
  top: -34.25px;
  right: -205px;
  object-fit: cover;
`;

const ServicesContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`;

const ServicesSection = styled.section`
  width: 1552px;
  height: 741px;
  background: linear-gradient(180deg, rgba(231, 245, 255, 0.7) 23.45%, rgba(80, 168, 255, 0.7) 95.17%);
  border-radius: 6px;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServicesHeading = styled.h2`
  width: 825px;
  height: 72px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: black;
  text-align: center;
  margin-top: 25px;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 36px;
`;

const ServiceCard = styled.div`
  width: 375px;
  height: 477px;
  background: #FFFFFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 25px;
  box-sizing: border-box;
`;

const ServiceIcon = styled.img`
  width: 149px;
  height: 149px;
  object-fit: contain;
`;

const ServiceTitle = styled.h4`
  width: 192px;
  height: 60px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 115%;
  letter-spacing: -1.2%;
  color: #000000;
  text-align: center;
  margin: 44px 0 20px 0;
`;

const ServiceDescription = styled.p`
  width: 325px;
  height: 72px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: -0.9%;
  color: #1E1E1E;
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
            <ButtonText>About Us</ButtonText>
          </ExploreButton>
        </ContentWrapper>
      </HeroSection>

      <AboutContainer>
        <AboutSection>
          <AboutHeading>About Anitha Solutions</AboutHeading>
          <AboutText>
            Anitha Solutions is a technology consulting and support company dedicated to helping 
            businesses meet their challenges. We believe technology solutions should solve 
            problems, not create them. We provide a full range of information technology services. 
            Anitha Solutions has been a leading provider of Software services and solutions dedicated 
            to helping businesses meet their challenges.
          </AboutText>
          <WhyUsButton to="/about">
            <ButtonText>Why Us?</ButtonText>
          </WhyUsButton>
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
                <br></br>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </CardsContainer>
        </ServicesSection>
      </ServicesContainer>

      <AboutContainer>
        <AboutSection>
          <AboutHeading>Careers We Offer</AboutHeading>
          <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin eu. Nulla lacinia a ex in rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin eu. Nulla lacinia a ex in rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AboutText>
          <WhyUsButton to="/about">
            <ButtonText>Learn More→</ButtonText>
          </WhyUsButton>
          <AboutImage src={homeImage2} alt="About Anitha Solutions" />
        </AboutSection>
      </AboutContainer>
    </>
  );
};

export default Home;
