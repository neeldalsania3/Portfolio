// Portfolio data - edit this file to update content

export const personalInfo = {
  name: "Neel Dalsania",
  title: "Software Engineer",
  subtitle: "Full-Stack: React.js, Node.js, Vue.js",
  location: "Ahmedabad, India",
  email: "neeldalsania333@gmail.com",
  linkedin: "https://linkedin.com/in/neel-dalsania-a96051225",
  github: "https://github.com/neeldalsania3",
  resumeUrl: "/Neel_Dalsania_Resume.pdf",
  pitch: "Crafting scalable, user-centric web applications that solve real-world business challenges",
  tagline: "Building Digital Solutions That Make a Difference",
  rotatingTexts: [
    "Software Engineer",
    "Full-Stack Developer"
  ],
};

export const about = {
  description:
    "I'm a passionate Software Engineer specializing in full-stack web development with over a year of hands-on experience. I thrive on transforming complex business requirements into elegant, scalable solutions. My expertise lies in building robust applications using React.js, Node.js, and Vue.js, with a strong focus on creating intuitive user experiences and maintaining clean, efficient code.",
  extendedDescription:
    "Beyond just writing code, I'm deeply invested in understanding the 'why' behind every feature. I believe great software is born from the intersection of technical excellence and genuine empathy for user needs. Whether it's architecting RESTful APIs, implementing real-time features with WebSockets, or crafting responsive UIs, I approach each challenge as an opportunity to learn and deliver value.",
  highlights: [
    {
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions through systematic thinking and creative approaches.",
      icon: "Lightbulb",
    },
    {
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and frameworks to deliver modern, efficient solutions.",
      icon: "Zap",
    },
    {
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams to build products that users love.",
      icon: "Users",
    },
    {
      title: "Quality Focused",
      description: "Writing clean, maintainable code with comprehensive testing and documentation.",
      icon: "Target",
    },
  ],
};

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Vue.js" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "RESTful APIs" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Aggregation Pipelines" },
      { name: "SQL" },
      { name: "Redis" },
      { name: "JWT Authentication" },
      { name: "Multer" },
      { name: "Cloudinary" },
    ],
  },
  {
    category: "Libraries, State Management & Tools",
    skills: [
      { name: "Redux Toolkit" },
      { name: "Context API" },
      { name: "React Router" },
      { name: "React Hook Form" },
      { name: "Tailwind CSS" },
      { name: "Axios" },
      { name: "Pinia" },
      { name: "Chart.js" },
      { name: "Socket.io" },
      { name: "Git" },
      { name: "GitHub" },
    ],
  },
];

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location?: string;
  responsibilities: string[];
}

export const experience: Experience[] = [
  {
    company: "Alvi Software Pvt. Ltd.",
    position: "Software Engineer",
    duration: "April 2025 - Present",
    responsibilities: [
      "Shipped production-grade features across customer engagement, e-commerce administration, and real-time communication platforms, including 4 e-commerce administration modules and 3-panel role-based dashboards",
      "Engineered scalable RESTful APIs in Node.js and Express.js with MVC architecture, centralized middleware, custom error handling, and Multer-based Cloudinary file uploads",
      "Secured customer, restaurant, and admin panels with RBAC, bcrypt password hashing, and dual-token JWT authentication (access token plus HTTP-only refresh token)",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  features?: string[];
  technicalHighlights?: string[];
  impact?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Food Delivery Platform",
    description:
      "A comprehensive multi-panel food delivery system with restaurant discovery, order management, and analytics dashboards.",
    detailedDescription:
      "A full-stack food delivery platform designed to connect customers, restaurants, and administrators through separate role-based dashboards. The system handles the complete order lifecycle from browse to delivery, with features for restaurant search and real-time order tracking.",
    features: [
      "Built three separate dashboards (Customer, Restaurant, Admin) with distinct workflows and role-based permissions",
      "Implemented MongoDB Aggregation Pipelines for complex restaurant search queries with filters for cuisine, rating, and delivery time",
      "Integrated Redis caching for frequently accessed restaurant data to improve response times",
      "Developed real-time order status tracking and notifications",
    ],
    technicalHighlights: [
      "Role-Based Access Control (RBAC) with dual-token JWT authentication (access + HTTP-only refresh tokens)",
      "Password hashing with bcrypt for secure credential storage",
      "Redux Toolkit for centralized state management across dashboards",
      "React Router for navigation and protected routes",
      "MongoDB indexing on restaurant location and rating fields for optimized queries",
    ],
    impact:
      "Successfully deployed and handling daily orders with improved search performance through caching and database indexing strategies.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
    ],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Astrology Consultation Platform",
    description:
      "A real-time consultation platform connecting users with astrologers through live chat and appointment scheduling.",
    detailedDescription:
      "An interactive platform enabling users to book consultations with professional astrologers. The system features real-time communication, astrologer availability management, and comprehensive booking workflows.",
    features: [
      "Real-time chat system using Socket.io for instant messaging between users and astrologers",
      "Live consultation notifications for booking confirmations and reminders",
      "Advanced search and filtering for finding astrologers by specialization, language, and rating",
      "Server-side pagination for efficiently loading large astrologer directories",
      "User profile management with consultation history",
      "Astrologer dashboard for managing availability and appointments",
    ],
    technicalHighlights: [
      "Modular Express.js architecture with separate routes for users, astrologers, bookings, and chats",
      "Socket.io rooms for private one-to-one chat sessions",
      "Rate limiting middleware to prevent API abuse",
      "Mongoose schema design with proper indexing for performance",
      "Custom error handling middleware for consistent API responses",
    ],
    impact:
      "Platform successfully facilitates consultations with real-time chat providing instant user-astrologer connection and improved engagement.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Onsite Manager (Customer Engagement Platform)",
    description:
      "A multi-tenant SaaS platform for e-commerce businesses to manage customer engagement, reviews, and store operations.",
    detailedDescription:
      "An enterprise-grade customer engagement and marketing automation platform serving multiple e-commerce clients simultaneously. The system provides a centralized dashboard for managing products, orders, inventory, and customer reviews.",
    features: [
      "Multi-tenant architecture supporting multiple enterprise clients with data isolation",
      "Built 4 e-commerce administration modules: Product Management, Order Processing, Inventory Tracking, and Receipt Generation",
      "Interactive Chart.js analytics dashboards displaying sales trends and customer insights",
      "Live preview system for ratings and reviews widget configuration",
      "Reusable Vue.js component library for consistent UI across modules",
      "Responsive design optimized for desktop workflows",
    ],
    technicalHighlights: [
      "Centralized Pinia state management for global app state and cross-module communication",
      "Vue.js option API for maintainable component logic",
      "Dynamic theme system allowing clients to customize widget appearance",
      "Backend-generated JavaScript widgets for website embedding",
      "Lazy loading and code splitting for optimized initial page loads",
      "TypeScript for type-safe component props and store actions",
    ],
    impact:
      "Successfully deployed for multiple enterprise clients processing orders daily. The modular architecture allows streamlined onboarding of new clients.",
    technologies: ["Vue.js", "Pinia", "Chart.js", "TypeScript"],
    githubUrl: "#",
    featured: true,
  },
];

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  duration: string;
  score: string;
  location?: string;
}

export const education: Education[] = [
  {
    institution: "RK University, Rajkot",
    degree: "B.Tech",
    field: "Computer Engineering",
    duration: "2021 - 2025",
    score: "CGPA 9.17/10",
  },
  {
    institution: "St. Mary's School, Porbandar",
    degree: "12th Board (GSHSEB)",
    duration: "2021",
    score: "87.7%",
  },
  {
    institution: "Atmiya Vidyapeeth, Gandhidham",
    degree: "10th Board (CBSE)",
    duration: "2019",
    score: "91.8%",
  },
];

export const techStack = [
  "React.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "Vue.js",
  "Redux",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "Socket.io",
];
