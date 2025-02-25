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
        'Led the development and launch of a Web3 gaming platform, increasing user retention by 20% and growing DAUs by 40% in two months.',
        'Defined and executed the product roadmap for custom Shopify apps, driving a 30% revenue increase.',
        'Conducted customer research, gathered insights, and iterated on features based on user feedback and analytics.',
        'Managed end-to-end product lifecycle: concept, MVP, launch, and growth phases.',
        'Collaborated with engineering, design, and marketing teams to align development efforts with business goals.',
        'Established KPIs and analytics dashboards to track product success and optimize decision-making.',
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
        'Defined requirements and collaborated with stakeholders to build a custom CMS for the FDA, leading to 2,000+ active users.',
        'Designed and implemented product features for a Big Data search engine, increasing adoption by 500+ users.',
        'Conducted A/B testing and usability studies to refine product features and improve user experience.',
        'Authored technical documentation and played a key role in securing an 8% contract renewal increase.',
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
        'Led system audits and risk assessments for Fortune 500 clients, identifying and implementing key security measures.',
        'Conducted SQL-based data analysis to uncover vulnerabilities and present mitigation strategies to C-suite executives.',
        'Facilitated cross-functional meetings to align technology solutions with business needs.',
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