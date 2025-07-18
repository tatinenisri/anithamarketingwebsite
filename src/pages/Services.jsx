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

const ServicesTitle = styled.h1`
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

const ServiceSection = styled.div`
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

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
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

const ServiceImage = styled.img`
  width: 100%;
  max-width: 500px;
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

      <ContentContainer>
        {/* Service 1 - Content left, Image right */}
        <ServiceSection>
          <ServiceContent>
            <ServiceTitle>Application Development Services</ServiceTitle>
            <ServiceList>
              <ServiceItem>Discuss your business objectives and application ideas with our experts, and they will assist you in developing an altogether new application as well as provide guidance on every stage of your application’s development life cycle.</ServiceItem>
              <ServiceItem>In-house, we are staffed with developers who are well knowledgeable about various emerging technologies and have experience in developing software applications according to the client’s needs.</ServiceItem>
              <ServiceItem>We provide rapid solutions in order to avoid major issues that may develop during operation, technology, or coding. We ensure that the applications are user-friendly and cross-platform compatible.</ServiceItem>
            </ServiceList>
          </ServiceContent>
          <ServiceImage src={service1} alt="Service 1" />
        </ServiceSection>

        {/* Service 2 - Image left, Content right */}
        <ServiceSectionReverse>
          <ServiceContent>
            <ServiceTitle>Application Maintenance & Support</ServiceTitle>
            <ServiceList>
              <ServiceItem>Our application maintenance and support services are completely personalized, we tailor the services to your specific needs, including any kind of maintenance and support.</ServiceItem>
              <ServiceItem>Complete end-to-end assistance will be provided to your business by our expert team right from monitoring to identifying bugs & fixing them and testing the remodeled application for better performance.</ServiceItem>
              <ServiceItem>We also provide onsite-offshore and nearshore AMS project models to various clients in order to improve business scalability, productivity, business revenue reduction, quality of applications, security, and customer satisfaction.
              </ServiceItem>
            </ServiceList>
          </ServiceContent>
          <ServiceImage src={service2} alt="Service 2" />
        </ServiceSectionReverse>

        {/* Service 3 - Content left, Image right */}
        <ServiceSection style={{ marginBottom: '80px' }}>
          <ServiceContent>
            <ServiceTitle>Data and Analytics</ServiceTitle>
            <ServiceList>
              <ServiceItem>We supply a comprehensive array of software development, product testing, optimization, and data analytics services that can be used to speed up the product's time to market.</ServiceItem>
              <ServiceItem>We have deep domain experience, Anitha Solutions is staffed with highly experienced data engineers, developers, and scientists for offering quality-driven data analytical models</ServiceItem>
              <ServiceItem>Delivering impactful insights is our ultimate objective, hence we supply these insights, reports, and engagements by leveraging Artificial Intelligence and Machine Learning.</ServiceItem>
            </ServiceList>
          </ServiceContent>
          <ServiceImage src={service3} alt="Service 3" />
        </ServiceSection>
      </ContentContainer>
    </ServicesContainer>
  );
};

export default Services;