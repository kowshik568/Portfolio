import { Project, SkillCategory, Experience } from '../types';

export const PERSONAL_INFO = {
  name: 'Sai Kowshik',
  fullName: 'Venkata Sai Kowshik Boddu',
  role: 'AI Developer & Full-Stack Engineer',
  education: {
    degree: 'B.Tech in Computer Science Engineering (Artificial Intelligence)',
    institution: 'Parul University',
    location: 'Vadodara, Gujarat, India',
    graduationYear: '2027',
  },
  bio: 'I’m Sai Kowshik, a Computer Science Engineering student focused on AI and software development. I enjoy turning ideas into practical applications, building full-stack products, and exploring how AI can make software more useful.',
  headline: 'BUILDING DIGITAL THINGS THAT DO SOMETHING.',
  email: 'kowshik.bvs@gmail.com',
  linkedin: 'https://linkedin.com/in/venkata-sai-kowshik-boddu',
  github: 'https://github.com/kowshik568',
};

export const PROJECTS: Project[] = [
  {
    id: 'collabrix',
    title: 'Collabrix',
    tagline: 'Developer Collaboration & Opportunity Platform',
    category: 'Full-Stack',
    year: '2025 – Present',
    repoUrl: 'https://github.com/kowshik568/Collabrix-',
    role: 'Lead Full-Stack Developer & Architect',
    description:
      'A software platform designed to help early-career developers discover collaborative opportunities, assemble cross-functional teams, and demonstrate their practical engineering skills through real, tangible builds.',
    summary:
      'Engineered with React, Node.js, Express, and MongoDB. Features dedicated workspace boards, role matching, issue tracking, and peer developer discovery.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'REST APIs'],
    accentColor: '#3987FF',
    previewId: 'collabrix',
    caseStudy: {
      problem:
        'Early-career developers often struggle to find motivated peers to build production-grade projects together. Most student portfolios rely on isolated personal repos that do not show collaborative git workflows, code reviews, or team role distribution.',
      targetAudience:
        'Computer science students, aspiring software engineers, and early-career builders seeking to collaborate on meaningful projects.',
      solution:
        'Collabrix provides a structured ecosystem where builders can post project initiatives, search for peers by specific tech stack needs (frontend, backend, ML), manage project boards, and showcase verified contribution history.',
      architecture: [
        'Modular React frontend utilizing responsive component hierarchies and stateful workspace panels.',
        'Express.js RESTful API layer managing authentication, project registry, applications, and role queries.',
        'MongoDB document storage for user profiles, project boards, task cards, and membership states.',
        'JWT-based session authentication with role-aware route guards.',
      ],
      technicalDecisions: [
        {
          decision: 'RESTful API over GraphQL for early phase',
          rationale: 'Kept endpoint contracts simple, fast to debug, and transparent for standard CRUD and teammate matching flows.',
        },
        {
          decision: 'Role-Based Workspace Permissions',
          rationale: 'Ensures project creators can review peer join requests before granting task update rights.',
        },
      ],
      currentStatus:
        'Active development in primary GitHub repository (kowshik568/Collabrix-). Core workspace, user flow, and team boards implemented; real-time messaging pipeline planned next.',
      challengesAndTradeoffs:
        'Balancing comprehensive project metadata with a friction-free onboarding flow for busy students. Addressed by designing a multi-step project creation wizard.',
      whatILearned:
        'Deepened understanding of multi-entity database schemas in MongoDB, robust state propagation in complex React forms, and API route security.',
    },
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    tagline: 'Intelligent ATS Scoring & Skill-Gap Diagnostic Tool',
    category: 'AI Integration',
    year: '2025',
    repoUrl: 'https://github.com/kowshik568',
    role: 'Full-Stack & AI Integration Engineer',
    description:
      'An intelligent document analysis web app that evaluates candidate resumes against target job descriptions, computes Applicant Tracking System (ATS) match scores, detects missing domain keywords, and suggests concrete structural improvements.',
    summary:
      'Combines a React frontend with a Node/Express backend that interfaces with OpenAI API for structured prompt evaluation, keyword density extraction, and actionable revision guidance.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'Document Parsing'],
    accentColor: '#3987FF',
    previewId: 'resume-analyzer',
    caseStudy: {
      problem:
        'Job seekers frequently submit unoptimized resumes to ATS scanners that automatically filter out candidates based on missing keywords and formatting inconsistencies without providing actionable feedback.',
      targetAudience:
        'Students and developers preparing for tech hiring pipelines who need transparent, immediate feedback on their resumes.',
      solution:
        'A dedicated analyzer that extracts raw text, benchmarks it against target job requirements, parses skills, and generates an objective ATS alignment rating with categorized recommendations.',
      architecture: [
        'React UI with drag-and-drop document upload and interactive score radar visualization.',
        'Node/Express processing pipeline that extracts text content from uploaded files.',
        'Structured prompt engineering targeting OpenAI models to output strict JSON schemas for scoring, strengths, and missing skills.',
        'MongoDB persistence for saved analysis reports and comparison over time.',
      ],
      technicalDecisions: [
        {
          decision: 'Enforced JSON Schema on AI Output',
          rationale: 'Prevented unpredictable Markdown responses by enforcing structured JSON output for bulleted feedback and numerical ratings.',
        },
        {
          decision: 'Categorized Skill Classification',
          rationale: 'Separated hard technical skills from domain keywords to make recommendations clear and actionable.',
        },
      ],
      currentStatus:
        'Core analysis engine and interactive dashboard built. Explored local embeddings for offline keyword comparisons.',
      challengesAndTradeoffs:
        'Prompt token costs and latency when parsing long multi-page resumes. Addressed by pre-cleaning whitespace and prioritizing relevant experience sections before sending prompts.',
      whatILearned:
        'Hands-on experience with prompt design, handling model hallucination guardrails, and parsing semi-structured document text.',
    },
  },
  {
    id: 'smart-job-portal',
    title: 'Smart Job Portal',
    tagline: 'End-to-End Recruitment & Application Workflow Engine',
    category: 'Full-Stack',
    year: '2024 – 2025',
    repoUrl: 'https://github.com/kowshik568',
    role: 'Full-Stack Developer',
    description:
      'A comprehensive recruitment platform featuring dual candidate and recruiter portals, secure JWT authentication, Cloudinary-backed resume uploads, job listings management, and application status tracking.',
    summary:
      'Engineered with React, Node.js, Express, MongoDB, and Cloudinary. Includes granular search filters, application lifecycles, and recruiter evaluation tools.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Cloudinary'],
    accentColor: '#0098FF',
    previewId: 'job-portal',
    caseStudy: {
      problem:
        'Disjointed hiring workflows make it hard for small teams to track applicant status, while candidates are left in the dark about whether their application was reviewed.',
      targetAudience:
        'Hiring managers needing a straightforward posting board and candidates seeking transparent status tracking.',
      solution:
        'A streamlined portal where recruiters post openings and inspect candidate portfolios, while applicants get real-time status stages (Submitted, Reviewing, Shortlisted, Closed).',
      architecture: [
        'React client with modular route structure for public listings, applicant dashboards, and recruiter workspaces.',
        'Express backend handling RESTful operations for jobs, applications, and authentication.',
        'Cloudinary integration for secure file storage and PDF asset delivery.',
        'MongoDB collections for users, listings, applications, and status history.',
      ],
      technicalDecisions: [
        {
          decision: 'Cloudinary for CV document storage',
          rationale: 'Offloaded heavy file binary handling from the database server and provided secure signed URLs.',
        },
        {
          decision: 'Dual role JWT claims',
          rationale: 'Encoded role scopes directly into JWT tokens to enforce immediate route protection on both client and server.',
        },
      ],
      currentStatus:
        'Complete CRUD functionality for jobs and applications with role-based routing and Cloudinary asset uploads.',
      challengesAndTradeoffs:
        'Handling asynchronous file uploads while validating file formats and sizes. Solved using Multer middleware with strict MIME-type guards.',
      whatILearned:
        'Deepened expertise in JWT authentication patterns, token refresh lifecycles, third-party asset hosting with Cloudinary, and relational modeling in NoSQL.',
    },
  },
  {
    id: 'algorithmic-engineering',
    title: 'Algorithmic Problem Solving',
    tagline: 'Data Structures, Algorithms & Competitive Programming',
    category: 'Systems & Algorithms',
    year: 'Continuous',
    repoUrl: 'https://github.com/kowshik568',
    role: 'Competitive Programmer & Algorithmic Problem Solver',
    description:
      'Rigorous practice in algorithmic thinking, data structures, and computational complexity. Achieved Global Rank 4014 in TCS CodeVita Season 13, focusing on clean Java implementations and time-optimal solutions.',
    summary:
      'Focused on Java and Python implementations covering Dynamic Programming, Graph Traversal, Binary Search, Trees, and Greedy strategies.',
    tags: ['Java', 'Python', 'Algorithms', 'Data Structures', 'CodeVita', 'Complexity Analysis'],
    accentColor: '#3987FF',
    previewId: 'algorithms',
    caseStudy: {
      problem:
        'Writing code that merely functions is not enough; software at scale requires optimal time and space complexity, rigorous edge-case handling, and systematic problem breakdown.',
      targetAudience:
        'Software engineering teams looking for strong computer science fundamentals and disciplined problem-solving ability.',
      solution:
        'Consistent practice tackling non-trivial algorithmic problems under competitive time limits and memory constraints.',
      architecture: [
        'In-depth study and implementation of core graph algorithms (Dijkstra, BFS, DFS, Topological Sort).',
        'Dynamic programming patterns (0/1 Knapsack, Longest Common Subsequence, Grid DP, Bitmasking).',
        'Data structure implementations in Java: Custom Heaps, Trie, Segment Trees, and Disjoint Set Union (DSU).',
      ],
      technicalDecisions: [
        {
          decision: 'Primary contest language: Java',
          rationale: 'Strong static typing, predictable memory models, and standard library collections (PriorityQueue, TreeSet).',
        },
        {
          decision: 'Secondary analysis language: Python',
          rationale: 'Rapid prototyping of mathematical algorithms and combinatorial scripts.',
        },
      ],
      currentStatus:
        'Active practice across competitive platforms; secured Global Rank 4014 in TCS CodeVita Season 13.',
      challengesAndTradeoffs:
        'Overcoming time limit exceeded (TLE) errors in complex DP problems by optimizing state space and transition equations.',
      whatILearned:
        'Patience, systematic dry-running with pen and paper, and writing clean, bug-free code under competitive pressure.',
    },
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core',
    description: 'Foundational programming languages used across coursework, competitive contests, and web applications.',
    skills: [
      { name: 'Java', context: 'Data structures, competitive programming, OOP', level: 'Core' },
      { name: 'Python', context: 'Data manipulation, scripting, ML foundations', level: 'Core' },
      { name: 'JavaScript (ES6+)', context: 'Modern web development, asynchronous patterns', level: 'Core' },
      { name: 'TypeScript', context: 'Typed React components, interface definitions', level: 'Practiced' },
      { name: 'SQL', context: 'Relational queries, schema design, joins, indexing', level: 'Practiced' },
      { name: 'C / C++', context: 'Memory models, CS curriculum fundamentals', level: 'Practiced' },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Crafting responsive, accessible, and interactive user interfaces.',
    skills: [
      { name: 'React.js', context: 'Hooks, component architecture, state management', level: 'Core' },
      { name: 'Tailwind CSS', context: 'Utility-first responsive layouts, tokens', level: 'Core' },
      { name: 'HTML5 & Semantic Markup', context: 'Accessibility, structure, SEO best practices', level: 'Core' },
      { name: 'CSS3 & Animation', context: 'Transitions, keyframes, flexbox, CSS grid', level: 'Core' },
      { name: 'Responsive Web Design', context: 'Mobile-first layouts, adaptive navigation', level: 'Core' },
      { name: 'Framer Motion / Motion', context: 'Micro-interactions, layout transitions', level: 'Practiced' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server-side architectures, REST APIs, and application services.',
    skills: [
      { name: 'Node.js', context: 'Runtime environment for server applications', level: 'Core' },
      { name: 'Express.js', context: 'RESTful API routing, middleware, error handling', level: 'Core' },
      { name: 'RESTful API Design', context: 'HTTP methods, status codes, JSON contracts', level: 'Core' },
      { name: 'JWT Authentication', context: 'Token issuance, verification, protected routes', level: 'Core' },
      { name: 'API Integration', context: 'Consuming third-party APIs, Axios/Fetch', level: 'Core' },
      { name: 'Cloudinary SDK', context: 'Document and media asset handling', level: 'Practiced' },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Data modeling, persistence strategies, and document storage.',
    skills: [
      { name: 'MongoDB', context: 'Document schemas, Mongoose ODM, aggregations', level: 'Core' },
      { name: 'Relational SQL DBs', context: 'Tables, foreign keys, relational modeling', level: 'Practiced' },
      { name: 'Cloudinary', context: 'Cloud file storage, image optimization', level: 'Practiced' },
      { name: 'Database Normalization', context: 'Entity design, indexing basics', level: 'Practiced' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    description: 'Applying artificial intelligence models and techniques to real software.',
    skills: [
      { name: 'AI API Integration', context: 'Connecting LLM endpoints to web apps', level: 'Core' },
      { name: 'Prompt Engineering', context: 'Structured JSON output, system instructions', level: 'Core' },
      { name: 'OpenAI API', context: 'Document analysis, summarization, extraction', level: 'Core' },
      { name: 'Machine Learning Basics', context: 'Supervised learning concepts, evaluation metrics', level: 'Practiced' },
      { name: 'Applied AI Workflows', context: 'ATS scoring, semantic matching, text workflows', level: 'Practiced' },
      { name: 'Retrieval Concepts', context: 'Vector concepts, embeddings exploration', level: 'Exploring' },
    ],
  },
  {
    title: 'Developer Tools & Workflow',
    description: 'Version control, development tooling, and development environment.',
    skills: [
      { name: 'Git & GitHub', context: 'Branching, PRs, commit hygiene, team collaboration', level: 'Core' },
      { name: 'Vite', context: 'Modern frontend build tool and dev server', level: 'Core' },
      { name: 'Postman', context: 'API endpoint testing, request profiling', level: 'Core' },
      { name: 'VS Code', context: 'Primary IDE, debugging, extensions', level: 'Core' },
      { name: 'Linux / Bash', context: 'Command line operations, script execution', level: 'Practiced' },
      { name: 'AWS Cloud Foundations', context: 'EC2, S3, IAM via Cloud Quest', level: 'Practiced' },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    period: 'May 2026 – Aug 2026',
    role: 'Full-Stack Development Intern',
    organization: 'UnitedMentor',
    location: 'Remote',
    type: 'Internship',
    description:
      'Contributed to full-stack web application development, building responsive user interfaces with React and creating backend API services with Node.js and Express.',
    highlights: [
      'Developed responsive UI components and state management flows in React.',
      'Constructed RESTful API routes for data ingestion and user interactions.',
      'Collaborated on database schema design using MongoDB.',
      'Applied Git workflow best practices for feature branching and code reviews.',
    ],
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
    verifiedBadge: 'Industry Internship',
  },
  {
    period: '2024',
    role: 'Global Contestant — Rank 4014',
    organization: 'TCS CodeVita Season 13',
    location: 'Global Contest',
    type: 'Competition',
    description:
      'Competed in one of the world’s largest competitive programming competitions, solving complex algorithmic challenges within strict time and memory limits.',
    highlights: [
      'Secured Global Rank 4014 among tens of thousands of participants worldwide.',
      'Solved advanced problems in Data Structures, Dynamic Programming, and Graph Theory.',
      'Demonstrated time-efficient code execution and edge-case resilience.',
    ],
    skills: ['Java', 'Algorithms', 'Data Structures', 'Competitive Programming'],
    verifiedBadge: 'Global Rank 4014',
  },
  {
    period: '2024',
    role: 'Cloud Practitioner Certification & Challenge',
    organization: 'AWS Cloud Quest',
    location: 'Online',
    type: 'Certification',
    description:
      'Completed practical cloud architecture challenges demonstrating hands-on proficiency with Amazon Web Services foundational services.',
    highlights: [
      'Configured compute (Amazon EC2) and storage (Amazon S3) resources.',
      'Implemented identity management with IAM policies and role delegation.',
      'Understood cloud networking fundamentals including Virtual Private Clouds (VPC).',
    ],
    skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'IAM'],
    verifiedBadge: 'AWS Cloud Quest',
  },
  {
    period: '2024',
    role: 'Virtual Experience Simulation Participant',
    organization: 'Tata & Skyscanner (via Forage)',
    location: 'Online Simulation',
    type: 'Simulation',
    description:
      'Completed industry-grade virtual simulation programs covering business intelligence data visualization (Tata) and software engineering architecture (Skyscanner).',
    highlights: [
      'Created data visualization dashboards translating metrics into executive insights (Tata).',
      'Worked with software engineering architecture concepts and service interactions (Skyscanner).',
      'Reinforced understanding of professional engineering documentation and problem breakdown.',
    ],
    skills: ['Data Visualization', 'Software Architecture', 'Problem Solving'],
    verifiedBadge: 'Forage Simulation',
  },
];
