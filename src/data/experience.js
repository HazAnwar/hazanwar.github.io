// Work history, newest first. Keep it in step with the CV.

export const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Sky (NBCUniversal)',
    period: 'Oct 2021 - Present',
    summary: 'Technical lead and mentor for 14 engineers across two agile client squads on NBCUniversal’s streaming platform across Peacock, NOW, SkyShowtime and WOW (70M+ monthly active users).',
    points: [
      'Acted as technical lead and mentor across two client squads, owning technical direction and consistently rated Exceeds Expectations in annual reviews',
      'Led the React-to-TypeScript web client migration and performance overhaul to cut load time by 50%, architecting high-traffic product detail pages (PDP), adaptive video playback, SSO account linking and encrypted offline fallback resilience',
      'Architected and rolled out a greenfield Kotlin Android app with an integrated C++ and JavaScript runtime for 20M+ users, building the asynchronous native-to-React bridge, background sync workers and Chrome DevTools debugging proxy',
      'Spearheaded the React Native and TypeScript client architecture for next-generation Amazon devices, engineering a strictly typed bidirectional native-to-web messaging layer and custom React lifecycle hooks for low-memory hardware',
      'Consolidated 9 separate client codebases into a unified monorepo powered by a custom Jenkins Groovy CI/CD orchestrator, eliminating over 70% of pipeline duplication and automating Docker builds, Snyk security gates, merge queues and releases',
      'Drove telemetry-led engineering decisions and root-cause debugging using New Relic, Firebase (Crashlytics, Performance) and playback analytics to resolve complex React rendering bottlenecks, memory leaks and asynchronous IPC timeouts across millions of devices',
      'Built a native C++ mutual-TLS (mTLS) and RASP security module integrated with HashiCorp Vault to protect client certificates and packaged secrets, cutting security incidents by 40%, alongside Node.js (Express) and Spring Boot microservices on AWS and GCP',
      'Championed AI-first engineering across client repositories with repository-level AI agent workflows, custom skills and automated PR review gates, raising team output by 30% alongside leading executive R&D proofs of concept with OEM partners',
    ],
    tags: ['React', 'TypeScript', 'Kotlin', 'React Native', 'C++', 'Jenkins', 'Node.js', 'Spring Boot', 'AWS', 'GCP', 'Firebase', 'New Relic'],
  },
  {
    role: 'Software Engineer',
    company: 'Sky',
    period: 'Mar 2020 - Oct 2021',
    points: [
      'Refactored the core React, Redux and TypeScript web app to serve multiple international streaming brands from one configuration-driven codebase, and built the native bridge and led the Java-to-Kotlin migration of the flagship Android app',
      'Integrated Google Play Billing and Amazon in-app purchase SDKs with Spring Boot and Node.js (Express) receipt validation microservices, driving millions in annual subscription revenue and on-device sign-ups alongside OAuth2 Google Account Linking',
      'Migrated playback controls to the JavaScript Core Video SDK, built a greenfield internal Flutter app, and established headless Chrome end-to-end and mock-server test suites that reduced production incidents by 20%',
    ],
    tags: ['React', 'TypeScript', 'Redux', 'Android', 'Kotlin', 'Java', 'Spring Boot', 'Node.js', 'Flutter', 'Sentry'],
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
      'Delivered cloud-native services on AWS, GCP, Azure and IBM Cloud, including Spring Boot, Node.js and MongoDB apps',
    ],
    tags: ['React', 'TypeScript', 'Swift', 'Kotlin', 'Express', 'Spring Boot', 'AWS', 'Azure'],
  },
  {
    role: 'Technical Analyst',
    company: 'Bloomberg',
    period: 'Jun 2016 - Sep 2016',
    summary: 'Summer internship programme.',
    points: [
      'Diagnosed and resolved live Bloomberg Terminal issues for global financial institutions in a high-pressure environment, resolving 95% of cases directly and collaborating with engineering teams to escalate and patch complex defects',
    ],
    tags: [],
  },
];
