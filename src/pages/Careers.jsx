import React from 'react';
import styled from 'styled-components';
import careers1 from '../assets/careers1.png';
import { Link } from 'react-router-dom';

const CareersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CareersHero = styled.div`
  width: 1552px;
  height: 255px;
  background: #004C97;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
`;

const CareersTitle = styled.h1`
  width: 363px;
  height: 144px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 96px;
  line-height: 150%;
  letter-spacing: -2.3%;
  color: #FFFFFF;
  text-align: center;
  margin: 0;
`;

const MainContent = styled.div`
  width: 1552px;
  height: 880px;
  background: #A4D6FF;
  border: 4px solid #A4D6FF;
  border-radius: 6px;
  margin-top: 89px;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 136px 64px 64px 64px;
  box-sizing: border-box;
`;

const ContentText = styled.div`
  width: 752px;
  height: 546px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #000000;
  margin-right: 50px;
`;

const WorkTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #000000;
  margin-bottom: 32px;
`;

const WorkDescription = styled.p`
  margin-bottom: 32px;
  line-height: 1.6;
`;

const CareersImage = styled.img`
  width: 622px;
  height: 669px;
  object-fit: cover;
  border-radius: 12px;
  position: absolute;
  top: 136px;
  right: 64px;
`;

const CurrentOpeningsSection = styled.div`
  width: 1552px;
  margin-top: 50px;
  padding: 0 64px;
  box-sizing: border-box;
`;

const CurrentOpeningsTitle = styled.h2`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 150%;
  letter-spacing: -2.2%;
  color: #000000;
  margin-bottom: 40px;
`;

const OpeningItem = styled.div`
  width: 1376px;
  height: 80px;
  background: #C2E5FFB2;
  border: 4px solid #3DADFF;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const OpeningTitle = styled.h3`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #000000;
  margin: 0;
`;

const OpeningLocation = styled.span`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #004C97;
`;

const ExpandIcon = styled.span`
  font-size: 24px;
  color: #004C97;
  cursor: pointer;
`;

const ShareResumeButton = styled.button`
  width: 200px;
  height: 60px;
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border: none;
  border-radius: 6px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 40px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
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
            interdum feugiat ac eu purus. rus egestas justo, sed 
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
