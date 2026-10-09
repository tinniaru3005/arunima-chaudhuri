import type { Role } from '../types';

export const leadership: Role[] = [
  {
    role: 'Lead Facilitator',
    org: 'Women in Ethereum Protocol',
    when: 'Sep – Nov 2025',
    body: 'Designed and led a 10-week Ethereum protocol curriculum for 100+ participants in Cohort 4, and built the program website in React.',
    links: [
      { label: 'Curriculum', href: 'https://github.com/wiepteam/studygroup/tree/main/Cohort%204' },
      { label: 'Talks on YouTube', href: 'https://www.youtube.com/watch?v=kR-qmgIcC_U&list=PL1rUZzvsr4ZnxfSY_pdylWUN8sFwJevXT' },
      { label: 'Website code', href: 'https://github.com/wiepteam/website' },
    ],
  },
  { role: 'LFX Mentor', org: 'Hyperledger Foundation', when: 'Jun – Nov 2024', body: 'Screened 500+ applications and ran 40+ interviews to pick mentees, then guided them through building and releasing the AI-FAQ LLM ChatBot.' },
  { role: 'Technical Coach', org: 'AnitaB.org', when: 'Aug 2022 – Sep 2023', body: 'Mentored 160+ learners in full-stack development through a year-long Apprenticeship Pathway cohort, with an 85% completion rate.' },
  { role: 'Tech Fellow', org: 'Harvard WECode', when: 'Nov 2022 – Feb 2023', body: "Led technical programming and mentorship for 1000+ international attendees at Harvard's flagship women-in-CS conference." },
];
