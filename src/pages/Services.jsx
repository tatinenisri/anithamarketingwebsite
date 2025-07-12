import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServicesHero = styled.div`
  width: 100vw;
  height: 257px;
  background: #004C97;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
`;

const ServicesTitle = styled.h1`
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

const ServiceSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 80px 0;
  padding: 0 20px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

const ServiceSectionReverse = styled(ServiceSection)`
  flex-direction: row-reverse;
  
  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const ServiceTitle = styled.h2`
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

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

const ServiceItem = styled.li`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 500;
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

const ServiceImage = styled.img`
  width: 100%;
  max-width: 460px;
  height: auto;
  max-height: 350px;
  border-radius: 12px;
  object-fit: cover;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesHero>
        <ServicesTitle>Services</ServicesTitle>
      </ServicesHero>

      {/* Service 1 - Content left, Image right */}
      <ServiceSection>
        <ServiceContent>
          <ServiceTitle>Service 1</ServiceTitle>
          <ServiceList>
            <ServiceItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServiceItem>
            <ServiceItem>Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin.</ServiceItem>
            <ServiceItem>Duis auctor erat vel tellus porttitor, vel fermentum tellus tincidunt.</ServiceItem>
            <ServiceItem>Pellentesque pharetra felis et elit cursus, nec auctor odio facilisis.</ServiceItem>
            <ServiceItem>Ut volutpat odio id odio dapibus interdum.</ServiceItem>
          </ServiceList>
        </ServiceContent>
        <ServiceImage src={service1} alt="Service 1" />
      </ServiceSection>

      {/* Service 2 - Image left, Content right */}
      <ServiceSectionReverse>
        <ServiceContent>
          <ServiceTitle>Service 2</ServiceTitle>
          <ServiceList>
            <ServiceItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServiceItem>
            <ServiceItem>Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin.</ServiceItem>
            <ServiceItem>Duis auctor erat vel tellus porttitor, vel fermentum tellus tincidunt.</ServiceItem>
            <ServiceItem>Pellentesque pharetra felis et elit cursus, nec auctor odio facilisis.</ServiceItem>
            <ServiceItem>Ut volutpat odio id odio dapibus interdum.</ServiceItem>
          </ServiceList>
        </ServiceContent>
        <ServiceImage src={service2} alt="Service 2" />
      </ServiceSectionReverse>

      {/* Service 3 - Content left, Image right */}
      <ServiceSection style={{ marginBottom: '120px' }}>
        <ServiceContent>
          <ServiceTitle>Service 3</ServiceTitle>
          <ServiceList>
            <ServiceItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ServiceItem>
            <ServiceItem>Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin.</ServiceItem>
            <ServiceItem>Duis auctor erat vel tellus porttitor, vel fermentum tellus tincidunt.</ServiceItem>
            <ServiceItem>Pellentesque pharetra felis et elit cursus, nec auctor odio facilisis.</ServiceItem>
            <ServiceItem>Ut volutpat odio id odio dapibus interdum.</ServiceItem>
          </ServiceList>
        </ServiceContent>
        <ServiceImage src={service3} alt="Service 3" />
      </ServiceSection>
    </ServicesContainer>
  );
};

export default Services;