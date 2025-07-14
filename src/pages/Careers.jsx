import React, { useState } from 'react';
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

const OpeningItemContainer = styled.div`
  margin-bottom: 20px;
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
  box-sizing: border-box;
  cursor: pointer;
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
  transition: transform 0.3s ease;
  transform: ${props => props.expanded ? 'rotate(45deg)' : 'rotate(0deg)'};
`;

const ExpandedContent = styled.div`
  width: 1376px;
  background: #E8F4FF;
  border: 4px solid #3DADFF;
  border-top: none;
  border-radius: 0 0 6px 6px;
  padding: 32px;
  box-sizing: border-box;
  margin-left: 32px;
`;

const JobSection = styled.div`
  margin-bottom: 24px;
`;

const JobSectionTitle = styled.h4`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -1.9%;
  color: #000000;
  margin: 0 0 12px 0;
`;

const JobList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const JobListItem = styled.li`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -1.5%;
  color: #333333;
  margin-bottom: 8px;
`;

const ApplyButton = styled.button`
  background: linear-gradient(90deg, #FF9E42 0%, #FFC287 100%);
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-family: 'Avenir Next', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #FFFFFF;
  cursor: pointer;
  margin-top: 16px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Commented out the ShareResumeButton component
/*
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
*/

const ResumeSubmissionText = styled.div`
  margin-top: 40px;
  padding: 24px;
  background:rgb(216, 237, 255);
  border-radius: 6px;
  border: 2px solidrgb(218, 148, 17);
`;

const ResumeInstructions = styled.p`
  font-family: 'Avenir Next', sans-serif;
  font-weight: 650;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -1.5%;
  color: #000000;
  margin: 0;
  text-align: center;
`;

const EmailLink = styled.a`
  color: #004C97;
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Careers = () => {
  const [expandedOpenings, setExpandedOpenings] = useState({});

  const toggleOpening = (index) => {
    setExpandedOpenings(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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
      title: "Data Analyst", 
      location: "San Francisco, CA",
      department: "Data Science",
      type: "Full-time, On-site",
      description: [
        "Analyze complex data sets to drive business decisions.",
        "Create comprehensive reports and visualizations.",
        "Collaborate with cross-functional teams."
      ],
      requirements: [
        "Bachelor's degree in Data Science or related field",
        "Proficiency in SQL, Python, or R",
        "Experience with data visualization tools"
      ]
    },
    { 
      title: "UX Designer", 
      location: "Atlanta, GA",
      department: "Design",
      type: "Full-time, Hybrid",
      description: [
        "Design intuitive user interfaces and experiences.",
        "Conduct user research and usability testing.",
        "Create wireframes, prototypes, and design systems."
      ],
      requirements: [
        "Bachelor's degree in Design or related field",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong portfolio demonstrating UX/UI design skills"
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
            interdum feugiat ac eu purus. rus egestas justo, sed 
            condimentum lacus turpis ut metus.
          </WorkDescription>
        </ContentText>
        <CareersImage src={careers1} alt="Our work environment" />
      </MainContent>

      <CurrentOpeningsSection>
        <CurrentOpeningsTitle>Current Openings</CurrentOpeningsTitle>
        {openings.map((opening, index) => (
          <OpeningItemContainer key={index}>
            <OpeningItem onClick={() => toggleOpening(index)}>
              <OpeningTitle>{opening.title}</OpeningTitle>
              <OpeningLocation>{opening.location}</OpeningLocation>
              <ExpandIcon expanded={expandedOpenings[index]}>+</ExpandIcon>
            </OpeningItem>
            {expandedOpenings[index] && (
              <ExpandedContent>
                <JobSection>
                  <JobSectionTitle>Department:</JobSectionTitle>
                  <JobListItem>{opening.department}</JobListItem>
                </JobSection>
                
                <JobSection>
                  <JobSectionTitle>Type:</JobSectionTitle>
                  <JobListItem>{opening.type}</JobListItem>
                </JobSection>
                
                <JobSection>
                  <JobSectionTitle>Description:</JobSectionTitle>
                  <JobList>
                    {opening.description.map((desc, descIndex) => (
                      <JobListItem key={descIndex}>{desc}</JobListItem>
                    ))}
                  </JobList>
                </JobSection>
                
                <JobSection>
                  <JobSectionTitle>Requirements:</JobSectionTitle>
                  <JobList>
                    {opening.requirements.map((req, reqIndex) => (
                      <JobListItem key={reqIndex}>{req}</JobListItem>
                    ))}
                  </JobList>
                </JobSection>
                
                <ApplyButton>
                  Apply Now → (Please send your Resume to Ajayveerapaneni@anithasolutions.net and Hr@anithasolutions.net)
                </ApplyButton>
              </ExpandedContent>
            )}
          </OpeningItemContainer>
        ))}
        
        {/* Commented out the original Share Resume Button */}
        {/* <ShareResumeButton>Share Resume/CV</ShareResumeButton> */}
        
        <ResumeSubmissionText>
          <ResumeInstructions>
            Please send your Resume to <EmailLink href="mailto:Ajayveerapaneni@anithasolutions.net">Ajayveerapaneni@anithasolutions.net</EmailLink> and <EmailLink href="mailto:Hr@anithasolutions.net">Hr@anithasolutions.net</EmailLink> .
          </ResumeInstructions>
        </ResumeSubmissionText>
      </CurrentOpeningsSection>
    </CareersContainer>
  );
};

export default Careers;
