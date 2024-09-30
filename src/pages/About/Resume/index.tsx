import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Types
import { ResumeItem } from '../../../types';

// Components
import ResumeListItem from './ResumeListItem';
import { Subheading } from '../../../components';

// Styles
import { ResumeWrapper } from './index.style';

// Assets
import SleekAppLogo from '../../../assets/images/resume/sleekapp-logo.png';
import BAHLogo from '../../../assets/images/resume/booz-allen-hamilton.png';
import A2ZLogo from '../../../assets/images/resume/a2z-events.png';
import DeloitteLogo from '../../../assets/images/resume/deloitte.png';
import UMDLogo from '../../../assets/images/resume/university-of-maryland.png';

function Resume() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Constants
  const resumeItems: ResumeItem[] = [
    {
      company: 'Sleek App',
      position: 'Senior Software Engineer + Technical Product Manager',
      startDate: '2018',
      endDate: 'Present',
      highlights: [
        'Spearheaded the frontend development of a Web3 game using React, TypeScript, Solana Web3.js, and Node.js, increasing user retention by 20% and driving a 40% growth in daily active users to 70+ in 2 months.',
        'Led cross-functional teams to build custom Shopify apps using Remix, React, and Node.js, generating 30% additional revenue.',
        'Architected scalable systems and technology stacks, ensuring seamless performance across devices and platforms.',
        'Mentored junior developers on modern frameworks (React, Angular, Node.js), increasing team productivity by 25%.',
      ],
      imgSrc: SleekAppLogo,
      url: 'https://sleekapp.io',
    },
    {
      company: 'Booz Allen Hamilton',
      position: 'Fullstack Software Engineer',
      startDate: '2016',
      endDate: '2018',
      highlights: [
        'Led the development of a custom CMS for the United States FDA using React, GraphQL, and WordPress API, increasing usage to over 2,000 users within the first year.',
        'Developed frontend components for a Big Data search engine for the FDA, increasing the user base by 500 users.',
        'Authored technical documentation for custom applications, leading to contract renewals and an 8% increase in revenue for the following year.',
      ],
      imgSrc: BAHLogo,
      url: 'https://boozallen.com',
    },
    {
      company: 'a2z Event Solutions',
      position: 'Software Development Intern',
      startDate: '2015',
      endDate: '2016',
      highlights: [
        'Developed custom event management solutions using C#, VB.NET, HTML/CSS, and SQL for high-profile clients, improving event management efficiency by 5%.',
        'Created custom bug-reporting software that reduced internal issue-tracking costs by 15%.',
        'Trained and onboarded new interns, enhancing team cohesion and process understanding.',
      ],
      imgSrc: A2ZLogo,
      url: 'https://mya2zevents.com/',
    },
    {
      company: 'Deloitte',
      position: 'Technology Risk Consultant',
      startDate: '2014',
      endDate: '2015',
      highlights: [
        'Scoped requirements and estimated costs for Fortune 500 client projects, streamlining budgets and timelines.',
        'Conducted SQL-based system testing to identify deficiencies, resulting in the implementation of 5 key security measures in client databases.',
        'Presented findings to C-suite executives, leading to the adoption of recommended risk mitigation strategies.',
      ],
      imgSrc: DeloitteLogo,
      url: 'https://deloitte.com/',
    },
    {
      company: 'Unviersity of Maryland',
      position: 'Bachelor of Science in Information Systems & Accounting',
      startDate: '2010',
      endDate: '2014',
      highlights: [
        'Learned SQL, Visual Basic, and Database Management Systems.',
        'Led the Accounting & Business Association (ABA) as Vice President.',
        'Improved fundraising for non-profits via pro bono consulting with the Global Smith Fellows.',
      ],
      imgSrc: UMDLogo,
      url: 'https://umd.edu/',
    },
  ];

  return (
    <ResumeWrapper>
      <Subheading sx={isMobile ? { fontSize: 30 } : {}}>My Story</Subheading>
      {resumeItems.map((item, index) => (
        <ResumeListItem key={`resume-item-${index}`} item={item} />
      ))}
    </ResumeWrapper>
  );
}

export default Resume;