import React from 'react';
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
  height: 70px;
  background: #C2E5FFB2;
  border: 3px solid #3DADFF;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-bottom: 16px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    flex-direction: column;
    text-align: center;
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

const ShareResumeButton = styled.button`
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
  margin-top: 30px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

const Careers = () => {
  const openings = [
    { title: "Opening 1", location: "Brooklyn, NY" },
    { title: "Opening 2", location: "San Francisco, CA" },
    { title: "Opening 3", location: "Atlanta, GA" }
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
            <OpeningTitle>{opening.title}</OpeningTitle>
            <OpeningLocation>{opening.location}</OpeningLocation>
            <ExpandIcon>+</ExpandIcon>
          </OpeningItem>
        ))}
        <ShareResumeButton>Share Resume/CV</ShareResumeButton>
      </CurrentOpeningsSection>
    </CareersContainer>
  );
};

export default Careers;