import React, { useState } from 'react';
import styled from 'styled-components';
import careers1 from '../assets/careers1.png';

const CareersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CareersHero = styled.div`
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

const CareersTitle = styled.h1`
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

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  background: #A4D6FF;
  border-radius: 6px;
  margin: 60px 20px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 50px;
  box-sizing: border-box;
  gap: 40px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }
`;

const ContentText = styled.div`
  flex: 1;
  max-width: 600px;
`;

const WorkTitle = styled.h2`
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

const WorkDescription = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  margin-bottom: 16px;
`;

const CareersImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

const CurrentOpeningsSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 80px auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const CurrentOpeningsTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const OpeningItem = styled.div`
  width: 100%;
  background: #C2E5FFB2;
  border: 3px solid #3DADFF;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  margin-bottom: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const OpeningHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const OpeningTitle = styled.h3`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;
  color: #000000;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const OpeningLocation = styled.span`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  color: #004C97;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  color: #004C97;
  cursor: pointer;
  font-weight: bold;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const OpeningDetails = styled.div`
  padding: 20px 0;
  border-top: 1px solid #3DADFF;
  display: ${props => props.isExpanded ? 'block' : 'none'};
`;

const DetailSection = styled.div`
  margin-bottom: 20px;
`;

const DetailTitle = styled.h4`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin: 0 0 10px 0;
`;

const DetailText = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  margin: 0;
`;

const ContactInstructions = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #000000;
  text-align: center;
  margin: 30px 0;
  padding: 20px;
  background: #C2E5FFB2;
  border-radius: 6px;
  font-weight: 500;
`;

const EmailLink = styled.span`
  color: #004C97;
  font-weight: 600;
`;

const Careers = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (index) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const openings = [
    {
      title: "Software Engineer",
      location: "Brooklyn, NY",
      department: "Software Development",
      type: "Part-time, Remote Optional",
      description: [
        "6+ years of Java development experience with strong backend architecture knowledge",
        "Proficiency in Spring Boot and microservices development",
        "Hands-on experience with REST/SOAP services",
        "Advanced skills in PL/SQL and relational databases (Oracle/SQL Server)",
        "Solid experience with AWS services (EC2, Lambda, S3, API Gateway, RDS)"
      ],
      requirements: [
        "Working knowledge of Apache Kafka for event-driven architecture",
        "Tools: Jenkins, Git, Maven, IntelliJ, Tomcat",
        "Familiarity with CI/CD and cloud-native deployment models",
        "Experience in Agile development and strong team collaboration"
      ]
    },
    {
      title: "UI/UX Designer",
      location: "San Francisco, CA",
      department: "Design",
      type: "Full-time, On-site",
      description: [
        "5+ years experience with React Native (CLI preferred)",
        "Proficient in JavaScript and TypeScript",
        "Experience with Redux, React Navigation, and custom UI components",
        "Familiarity with mobile app release processes (App Store & Play Store)"
      ],
      requirements: [
        "5+ years experience with Java and Spring Boot",
        "Solid understanding of RESTful APIs, Spring Security, and JWT"
      ]
    },
  ];

  return (
    <CareersContainer>
      <CareersHero>
        <CareersTitle>Careers</CareersTitle>
      </CareersHero>

      <MainContent>
        <ContentText>
          <WorkTitle>Our work</WorkTitle>
          <WorkDescription>
          Anitha Solutions is an IT services and solutions provider company, supporting various businesses across the USA through innovative IT services and solutions. We deliver end-to-end software services to B2B and B2C companies globally that can be customized corresponding to your business requirements. Over the years, Anitha Solutions has associated with various industries and remains successful in retaining them to this day due to their quality-driven services.
          </WorkDescription>
          <WorkDescription>
          At Anitha Solutions, our expert team is highly knowledgeable and skilled at resolving your business challenges by analyzing the intensity with a unique approach. We look after everything, right from development to maintenance, digitalizing business operations, testing, handling big data, and providing complete support while ensuring quality and security.
          </WorkDescription>
        </ContentText>
        <CareersImage src={careers1} alt="Our work environment" />
      </MainContent>

      <CurrentOpeningsSection>
        <CurrentOpeningsTitle>Current Openings</CurrentOpeningsTitle>
        {openings.map((opening, index) => (
          <OpeningItem key={index}>
            <OpeningHeader>
              <OpeningTitle>{opening.title}</OpeningTitle>
              <OpeningLocation>{opening.location}</OpeningLocation>
              <ExpandIcon onClick={() => toggleExpand(index)}>
                {expandedItems.includes(index) ? '−' : '+'}
              </ExpandIcon>
            </OpeningHeader>
            <OpeningDetails isExpanded={expandedItems.includes(index)}>
              <DetailSection>
                <DetailTitle>Department</DetailTitle>
                <DetailText>{opening.department}</DetailText>
              </DetailSection>
              <DetailSection>
                <DetailTitle>Type</DetailTitle>
                <DetailText>{opening.type}</DetailText>
              </DetailSection>
              <DetailSection>
                <DetailTitle>Description</DetailTitle>
                <DetailText>
                  {opening.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </DetailText>
              </DetailSection>
              <DetailSection>
                <DetailTitle>Requirements</DetailTitle>
                <DetailText>
                  {opening.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </DetailText>
              </DetailSection>
            </OpeningDetails>
          </OpeningItem>
        ))}
        
        <ContactInstructions>
          Please mail your resumes to <EmailLink>Ajayveerapaneni@anithasolutions.net</EmailLink> and <EmailLink>Hr@anithasolutions.net</EmailLink> with the subject line having the role name
        </ContactInstructions>
        
        {/* Commented out ShareResumeButton
        <ShareResumeButton>Share Resume/CV</ShareResumeButton>
        */}
      </CurrentOpeningsSection>
    </CareersContainer>
  );
};

export default Careers;