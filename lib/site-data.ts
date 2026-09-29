export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroWords = [
  "AWS",
  "Azure",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Observability",
];

export const stats = [
  { value: 35, suffix: "%", label: "faster releases" },
  { value: 40, suffix: "%", label: "faster incident detection" },
  { value: 60, suffix: "%", label: "less downtime" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Swastik258",
    handle: "github.com/Swastik258",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/swastikpradhan2002",
    handle: "linkedin.com/in/swastikpradhan2002",
  },
  {
    name: "Email",
    href: "mailto:swastik.pradhan.sre@gmail.com",
    handle: "swastik.pradhan.sre@gmail.com",
  },
];

export const experience = [
  {
    company: "Goa Electronics Limited (GEL)",
    role: "DevOps Engineer",
    period: "Aug 2026–Present",
    location: "Goa",
    achievements: ["Currently managing CI/CD pipelines using AWS and Jenkins"],
  },
  {
    company: "DTC Infotech",
    role: "DevOps Engineer",
    period: "Sep 2025–Jun 2026",
    location: "Bengaluru",
    achievements: [
      "Containerized a .NET backend with Docker, deployed to AKS via a GitHub Actions CI/CD pipeline automating builds, ACR pushes, and rollouts — release time cut from hours to under 10 minutes with zero downtime across 10+ production updates",
      "Introduced image versioning with automatic rollback, cutting failed-release recovery time by 50%; resolved CrashLoopBackOff and image-pull failures using kubectl and Headlamp",
      "Onboarded 5+ enterprise clients onto the SixthSense AWS/Azure observability platform, reaching full monitoring coverage within 3 weeks per client",
      "Built monitoring/log pipelines with custom dashboards and SLA-aligned alerts, cutting false-alert rate by 40%",
    ],
  },
  {
    company: "Accenous Integral",
    role: "Software Engineer (DevOps Focus)",
    period: "Mar 2024–May 2025",
    location: "Bengaluru",
    achievements: [
      "Streamlined GitHub Actions workflows with layer caching, parallelized test jobs, and pre-deployment SAST/DAST scanning — cut deployment time by 35%",
      "Designed reusable Terraform modules and Ansible playbooks, shrinking environment setup from days to under 2 hours",
      "Stood up Prometheus and Grafana monitoring with custom dashboards/alerting, cutting incident detection time by 30%",
    ],
  },
];

export const skillGroups = [
  {
    title: "Cloud Platforms",
    items: ["AWS", "Azure", "EC2", "Lambda", "S3", "CloudWatch", "SNS", "DynamoDB", "Fargate", "EBS", "ACR", "AKS"],
  },
  {
    title: "Containers & CI/CD",
    items: ["Docker", "Kubernetes", "AKS", "GitHub Actions", "Jenkins", "AWS CodePipeline", "CodeBuild"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "Ansible"],
  },
  {
    title: "Monitoring & Observability",
    items: ["Prometheus", "Grafana", "Loki", "CloudWatch", "SixthSense"],
  },
  {
    title: "Languages, OS & Tools",
    items: ["Go", "Bash", "SQL", "Linux", "Ubuntu", "Debian", "Git", "GitHub"],
  },
];

export const projects = [
  {
    title: "JobRadar",
    stack: ["Next.js", "TypeScript", "FastAPI", "Go", "SQLite", "AI"],
    summary:
      "AI-powered job search intelligence platform that helps users discover better-fit roles through explainable job analysis and matching.",
    details: [
      "Built a polished Next.js dashboard with a FastAPI service for job search, resume analysis, and role matching",
      "Supports persisted authentication, live job providers, and deterministic AI-style analysis with optional model integrations",
    ],
    highlight: "AI-powered job matching",
    link: "https://github.com/Swastik258/job-rader",
  },
  {
    title: "Self-Healing Infrastructure System",
    stack: ["AWS Lambda", "EC2", "CloudWatch", "SNS", "Terraform"],
    summary:
      "CloudWatch alarms detect unhealthy EC2 instances and trigger Lambda functions to restart/replace them, cutting average downtime by 60%.",
    details: [
      "Infrastructure fully provisioned via Terraform with reusable modules, S3 remote state, and DynamoDB state locking",
      "SNS notifications for recovery events so on-call engineers can track automatic fixes without manual checks",
    ],
    highlight: "60% less downtime",
    diagram: [
      { label: "CloudWatch", tone: "blue" },
      { label: "Lambda", tone: "cyan" },
      { label: "EC2", tone: "violet" },
      { label: "SNS", tone: "teal" },
    ],
    link: "https://github.com/Swastik258",
  },
  {
    title: "War Watch — Real-Time Conflict & Geopolitical Monitoring Dashboard",
    stack: ["React.js", "Node.js", "Express.js", "Docker"],
    summary:
      "Aggregates live war news, military flight data, and geopolitical alerts from RSS feeds and external APIs.",
    details: [
      "Deduplication logic consolidates 3–5 duplicate records per event, improving signal accuracy",
      "Containerized with Docker, deployed on Render with AWS S3 for static assets, automated releases via GitHub Actions",
    ],
    highlight: "Signal accuracy boosted",
    link: "https://github.com/Swastik258",
  },
  {
    title: "Carbon Footprint Tracker",
    stack: ["React", "Firebase Auth"],
    summary:
      "Full-stack app to track personal carbon footprint and calculate emissions from travel, energy, and food, with eco tips; deployed on Vercel with Firebase Auth.",
    details: [
      "Tracks personal emissions across travel, energy, and food usage",
      "Provides actionable eco recommendations and a polished user dashboard",
    ],
    highlight: "Full-stack MVP",
    link: "https://github.com/Swastik258",
  },
];

export const education = [
  {
    degree: "B.E. Computer Science",
    school: "Visvesvaraya Technological University, Bengaluru",
    period: "Aug 2019–Aug 2023",
  },
];
