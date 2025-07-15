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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Aenean suscipit justo vel interdum bibendum.",
        "Duis auctor erat vel tellus porttitor, vel fermentum tellus tincidunt."
      ],
      requirements: [
        "Pellentesque pharetra felis et elit cursus",
        "nec auctor odio facilisis",
        "Ut volutpat odio id odio dapibus interdum."
      ]
    },
    {
      title: "UI/UX Designer",
      location: "San Francisco, CA",
      department: "Design",
      type: "Full-time, On-site",
      description: [
        "Design user interfaces for web and mobile applications",
        "Create wireframes and prototypes",
        "Collaborate with development team"
      ],
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in design tools",
        "Strong portfolio of work"
      ]
    },
    {
      title: "Project Manager",
      location: "Atlanta, GA",
      department: "Operations",
      type: "Full-time, Hybrid",
      description: [
        "Lead project planning and execution",
        "Coordinate with stakeholders",
        "Manage project timelines and resources"
      ],
      requirements: [
        "5+ years of project management experience",
        "PMP certification preferred",
        "Strong communication skills"
      ]
    }
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Aenean tincidunt mauris nulla, sed efficitur dui sollicitudin 
            eu. Nulla lacinia a ex in rhoncus. Quisque vitae viverra nisl, 
            non lacinia elit. Suspendisse iaculis enim vel eros blandit, 
            ultrices vehicula ante scelerisque. Nulla facilisi. Proin sit 
            amet augue eu metus pharetra rutrum. Interdum et malesuada 
            fames ac ante ipsum primis in faucibus.
          </WorkDescription>
          <WorkDescription>
            Aenean id ipsum leo. Vestibulum ultrices eleifend nulla, sed 
            aliquet massa malesuada at. Morbi vel posuere nisl. Donec a 
            tortor sit amet mi sollicitudin aliquam. Proin at eros eu mauris 
            interdum feugiat ac eu purus. Duis egestas justo, sed 
            condimentum lacus turpis ut metus.
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