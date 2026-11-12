// Work history, newest first. Keep it in step with the CV.

export const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Sky',
    period: 'Oct 2021 - Present',
    summary: 'Technical lead on the devices workstream, building apps used by 70M+ monthly active users worldwide across Peacock, NOW and SkyShowtime (and formerly Showmax).',
    points: [
      'Lead and mentor engineering teams, owning architecture and delivery for our device apps',
      'Architected and rolled out a greenfield Kotlin Android app with integrated JavaScript support, now used by 20M+ people',
      'Migrated a React web app to TypeScript and reworked its performance, halving load time',
      'Built native C++ tooling to protect secrets packaged in the apps, cutting security incidents by 40%',
      'Designed Node.js (Express) and Spring Boot microservices on AWS, with Jenkins pipelines running the full test suites',
      'Run R&D proofs of concept with senior leadership and OEM partners, and brought AI-assisted workflows into my teams, raising output by around 30% with the same headcount',
    ],
    tags: ['Kotlin', 'TypeScript', 'React', 'C++', 'Node.js', 'Spring Boot', 'AWS'],
  },
  {
    role: 'Software Engineer',
    company: 'Sky',
    period: 'Mar 2020 - Oct 2021',
    points: [
      'Integrated Google Play and Amazon in-app purchases into the Android app, with Spring Boot APIs for receipt management',
      'Built a native bridge so a React app could call Android APIs, and led the Java-to-Kotlin migration',
      'Refactored a React/Redux app to serve several propositions from one codebase, and built a greenfield Flutter app',
      'Wrote end-to-end test suites that reduced production incidents by 20%',
    ],
    tags: ['Android', 'Kotlin', 'Java', 'React', 'Redux', 'Flutter'],
  },
  {
    role: 'Technical Consultant',
    company: 'IBM iX',
    period: 'Jul 2018 - Mar 2020',
    summary: 'Embedded in client engineering teams, turning business requirements into production software.',
    points: [
      'Built an FCA-compliant hybrid banking app for Virgin Money across web (React, TypeScript), iOS (Swift) and Android (Kotlin)',
      'Led full-stack development of a PSD2 open banking portal (React, Express)',
      'Introduced chaos engineering practices, improving resilience KPIs by 30%',
      'Delivered cloud-native services on AWS, GCP, Azure and IBM Cloud, including Spring Boot and MongoDB apps',
    ],
    tags: ['React', 'TypeScript', 'Swift', 'Kotlin', 'Express', 'Spring Boot'],
  },
  {
    role: 'Technical Analyst',
    company: 'Bloomberg',
    period: 'Jun 2016 - Sep 2016',
    summary: 'Summer internship programme.',
    points: ['Diagnosed and resolved Bloomberg Terminal issues for financial institutions in real time, resolving 95% of cases directly and escalating complex defects to engineering'],
    tags: [],
  },
];
