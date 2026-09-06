import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

// Re-export crawlable plain-JS data (single source of truth for SEO + UI).
export {
  personalInfo,
  skillStats,
  facts,
  proofRail,
  engineeringPhilosophy,
  engineeringCapabilities,
  engineeringNotes,
  aiEngineering,
  careerEvolution,
  projectData,
  experienceData,
  whatIWorkOn,
} from "./crawlable.js";
import { personalInfo } from "./crawlable.js";

export const fetchData = [
  { label: "User", value: "omar@flutter-dev" },
  { label: "OS", value: "macOS Sonoma x86_64" },
  { label: "Host", value: "MacBook Pro M2" },
  { label: "Kernel", value: "Darwin 23.4.0" },
  { label: "Packages", value: "Flutter 3.24 · Dart 3.5" },
  { label: "Shell", value: "zsh 5.9" },
  { label: "CPU", value: "Apple M2 (8) @ 3.49GHz" },
  { label: "GPU", value: "Apple M2 GPU 10-core" },
  { label: "Memory", value: "16384MiB" },
  { label: "Peak Uptime", value: "24/7 Dev Mode" },
];

export type SkillLevel = "Expert" | "Advanced" | "Intermediate";
export type Skill = {
  name: string;
  icon: string;
  level: SkillLevel;
  years?: number;
  invertDark?: boolean;
};

export type EngineeringDecision = {
  title: string;
  detail: string;
};

export type CaseStudy = {
  context: string;
  challenge: string;
  ownership: string[];
  decisions: EngineeringDecision[];
  architecture: string[];
  impact: string[];
};

export type Project = {
  name: string;
  tagline?: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  category: string[];
  flagship?: boolean;
  caseStudy?: CaseStudy;
  platforms: { name: string; url: string }[];
};
export type SkillCategory = {
  category: string;
  description: string;
  items: Skill[];
};

export type EngineeringPhilosophyItem = {
  principle: string;
  detail: string;
};

export type EngineeringCapability = {
  capability: string;
  description: string;
  evidence: string[];
};

export type EngineeringNote = {
  title: string;
  summary: string;
  tags: string[];
  readTime: string;
};

export type AIEngineeringItem = {
  question: string;
  answer: string;
};

export type CareerEvolutionItem = {
  year: string;
  milestone: string;
  detail: string;
};

export const skills: SkillCategory[] = [
  {
    category: "Mobile",
    description: "Cross-platform app development",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter", level: "Expert", years: 4 },
      { name: "Dart", icon: "https://cdn.simpleicons.org/dart", level: "Expert", years: 4 },
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin", level: "Intermediate" },
      { name: "iOS", icon: "https://cdn.simpleicons.org/apple", level: "Advanced", invertDark: true },
      { name: "Android", icon: "https://cdn.simpleicons.org/android", level: "Advanced" },
    ],
  },
  {
    category: "State Management",
    description: "Reactive, scalable app state",
    items: [
      { name: "GetX", icon: "https://cdn.simpleicons.org/getx", level: "Expert", years: 4 },
      { name: "Provider", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
      { name: "BLoC/Cubit", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
      { name: "Riverpod", icon: "https://raw.githubusercontent.com/rrousselGit/riverpod/master/website/static/img/logo.svg", level: "Advanced", invertDark: true },
      { name: "RxDart", icon: "https://cdn.simpleicons.org/dart", level: "Advanced" },
    ],
  },
  {
    category: "Backend & Services",
    description: "Networking, realtime & cloud",
    items: [
      { name: "playx_network", icon: "https://cdn.simpleicons.org/dart", level: "Expert", years: 3 },
      { name: "Dio", icon: "https://cdn.simpleicons.org/dart", level: "Expert", years: 4 },
      { name: "REST API", icon: "https://cdn.simpleicons.org/postman", level: "Expert" },
      { name: "WebSocket", icon: "https://api.iconify.design/logos:websocket.svg", level: "Advanced", invertDark: true },
      { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql", level: "Intermediate", invertDark: true },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", level: "Advanced" },
      { name: "Pusher", icon: "https://cdn.simpleicons.org/pusher", level: "Advanced" },
      { name: "Remote Config", icon: "https://cdn.simpleicons.org/firebase", level: "Advanced" },
    ],
  },
  {
    category: "Persistence",
    description: "Local storage & offline-first",
    items: [
      { name: "Hive", icon: "https://cdn.simpleicons.org/hive", level: "Advanced" },
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite", level: "Advanced" },
      { name: "SharedPrefs", icon: "https://cdn.simpleicons.org/android", level: "Expert" },
      { name: "Secure storage", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Daily workflow & design handoff",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git", level: "Expert" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma", level: "Advanced" },
      { name: "VS Code", icon: "https://api.iconify.design/logos:visual-studio-code.svg", level: "Expert" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio", level: "Expert" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman", level: "Expert" },
      { name: "Xcode", icon: "https://cdn.simpleicons.org/xcode", level: "Advanced" },
    ],
  },
  {
    category: "CI/CD & Testing",
    description: "Automation, shipping & quality",
    items: [
      { name: "Fastlane", icon: "https://cdn.simpleicons.org/fastlane", level: "Advanced" },
      { name: "Codemagic", icon: "https://cdn.simpleicons.org/codemagic", level: "Advanced" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions", level: "Advanced" },
      { name: "flutter_test", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
      { name: "Mocktail", icon: "https://cdn.simpleicons.org/dart", level: "Advanced" },
    ],
  },
  {
    category: "Navigation & Design",
    description: "Routing & Material 3 UI",
    items: [
      { name: "GoRouter", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
      { name: "Material 3", icon: "https://cdn.simpleicons.org/materialdesign", level: "Expert" },
    ],
  },
  {
    category: "PM & Productivity",
    description: "Planning, tracking & team flow",
    items: [
      { name: "Linear", icon: "https://cdn.simpleicons.org/linear", level: "Advanced" },
      { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup", level: "Expert" },
      { name: "Trello", icon: "https://cdn.simpleicons.org/trello", level: "Advanced" },
      { name: "Slack", icon: "https://api.iconify.design/logos:slack-icon.svg", level: "Advanced" },
    ],
  },
  {
    category: "AI & MCP",
    description: "AI coding & context tooling",
    items: [
      { name: "Claude", icon: "https://cdn.simpleicons.org/claude", level: "Advanced" },
      { name: "Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/1F2328", level: "Expert", invertDark: true },
      { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/000000", level: "Advanced", invertDark: true },
      { name: "Composio", icon: "https://composio.dev/logos/composio-black.svg", level: "Advanced", invertDark: true },
      { name: "MCP Servers", icon: "https://cdn.simpleicons.org/modelcontextprotocol/D97757", level: "Intermediate" },
      { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic/D97757", level: "Intermediate" },
      { name: "Ollama", icon: "https://cdn.simpleicons.org/ollama/000000", level: "Intermediate", invertDark: true },
      { name: "Z.ai", icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg", level: "Intermediate" },
    ],
  },
  {
    category: "Architecture & Codegen",
    description: "Clean architecture, DI & code generation",
    items: [
      { name: "Freezed", icon: "https://cdn.simpleicons.org/dart", level: "Advanced" },
      { name: "json_serializable", icon: "https://cdn.simpleicons.org/dart", level: "Advanced" },
      { name: "Clean Architecture", icon: "https://cdn.simpleicons.org/flutter", level: "Expert" },
      { name: "SOLID", icon: "https://cdn.simpleicons.org/dart", level: "Expert" },
    ],
  },
  {
    category: "Native & Performance",
    description: "Platform channels & profiling",
    items: [
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin", level: "Intermediate" },
      { name: "Swift", icon: "https://cdn.simpleicons.org/swift", level: "Intermediate" },
      { name: "Platform Channels", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
      { name: "DevTools", icon: "https://cdn.simpleicons.org/dart", level: "Advanced" },
      { name: "Background GPS", icon: "https://cdn.simpleicons.org/flutter", level: "Advanced" },
    ],
  },
  {
    category: "Infra & Observability",
    description: "Deploy, host & monitor",
    items: [
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel", level: "Advanced", invertDark: true },
      { name: "Sentry", icon: "https://cdn.simpleicons.org/sentry", level: "Advanced" },
    ],
  },
];

export const timeline = [
  {
    year: "Sep 2025 – Present",
    detail:
      "Senior Flutter Developer at Sourcya — own delivery across 20+ production repositories spanning fleet GPS tracking, indoor asset tracking, cold-chain monitoring, ride-hailing, workforce management, healthcare and recycling.",
    more:
      "Own delivery and maintenance across 20+ production repositories, shipping 60+ features to production. Rebuilt a fleet-tracking event-trigger system replacing 21 flat reactive fields with a consolidated day-schedule state model. Built the sourcya_in_app_rating package with dependency-inversion seams and Arabic internationalization. Enhanced the PlayX ecosystem (playx_network streaming, interceptors, path params). Configured Staging/Production flavors for multi-app releases.",
  },
  {
    year: "2025",
    detail:
      "Senior Flutter Developer at Mafrooz — performance optimization on a Strapi-backed waste management and recycling platform.",
    more:
      "Led performance optimization on a Strapi-backed waste management and recycling platform across mobile and web. Produced and maintained API documentation from Postman collections.",
  },
  {
    year: "2024",
    detail:
      "Flutter Developer at Semicolon — built Zaakr, 3M Physics, and e-learning apps.",
    more:
      "Developed multiple production apps including Zaakr, 3M Physics, Super School, and E-learning platforms. Applied Clean Architecture and GetX, Provider patterns across all projects. Mentored 4 junior Flutter developers.",
  },
  {
    year: "2023",
    detail:
      "Flutter Developer at Nofalseo — built Cars, General Consultation, Super School, and more.",
    more:
      "Developed Cars (C2S automotive marketplace) and General Consultation (B2B consulting platform) using Clean Architecture with GetX state management. Also built Super School.",
  },
  {
    year: "2023",
    detail:
      "Lead Flutter Developer at Drop Me — circular recovery mobile platform (part-time).",
    more:
      "Sole Flutter developer from first commit through public release on Google Play and App Store. Built and maintain the real-time rewards system sustainability tracking. Mentoring 2 junior Flutter developers.",
  },
  {
    year: "2022",
    detail:
      "Freelance Flutter Developer — started professional journey with Az-Cash & El Aqarat.",
    more:
      "Completed Flutter MVVM with Clean Architecture (22h) and Advanced Flutter Clean Architecture (8h) certifications. Built first production apps and established core architecture discipline.",
  },
];

export const contactItems = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/OmarSaeed20",
    href: "https://github.com/OmarSaeed20",
    color: "text-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/omar-saied-5a25491ba",
    href: "https://www.linkedin.com/in/omar-saied-5a25491ba",
    color: "text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "omarhamode106@gmail.com",
    href: "mailto:omarhamode106@gmail.com",
    color: "text-red-500",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+20 1067496938",
    href: "https://wa.me/qr/S75YYDZVP773A1",
    color: "text-green-500",
  },
];

export const resume = {
  "flutter-developer": "/assets/Omar-Saeed-Senior-Flutter-Developer-Resume.pdf",
};

export const experience = [
  {
    company: "Sourcya",
    role: "Senior Flutter Developer",
    period: "Sep 2025 – Present",
    description: "Own delivery and maintenance across 20+ production repositories and 60+ production features spanning fleet GPS tracking, indoor asset tracking, cold-chain monitoring, ride-hailing, workforce management, healthcare and recycling — across Android, iOS and Web from a shared multi-app core.",
    highlights: ["20+ production repos","API migration across 8+ apps", "60+ production features", "Fleet GPS, ride-hailing, cold-chain", "sourcya_in_app_rating package", "Multi-flavor CI/CD pipelines"],
  },
  {
    company: "Drop Me",
    role: "Lead Flutter Developer (Part-time)",
    period: "Jan 2023 – Present",
    description: "Sole Flutter developer from first commit through public release on Google Play and the App Store. Built and maintain the real-time rewards system and gamified sustainability tracking.",
    highlights: ["First commit to public release", "Real-time rewards system", "Mentoring 2 junior developers"],
  },
  {
    company: "Mafrooz",
    role: "Senior Flutter Developer",
    period: "Jan 2025 – Jun 2025",
    description: "Led performance optimization. Built the pickup & waste-tracking logistics platform with pickup scheduling, collector/factory management, and a three-tier responsive inventory system.",
    highlights: ["Waste-tracking logistics platform", "Performance optimization", "API documentation from Postman collections"],
  },
  {
    company: "Semicolon",
    role: "Flutter Developer",
    period: "Jan 2024 – Jul 2024",
    description: "Built and shipped Zaakr, 3M Physics and a suite of e-learning applications applying Clean Architecture, Provider and GetX. Mentored 4 junior Flutter developers.",
    highlights: ["Multiple production apps shipped", "Clean Architecture & GetX & Provider", "Mentored 4 junior developers"],
  },
  {
    company: "Nofalseo",
    role: "Flutter Developer",
    period: "Jun 2023 – Jan 2024",
    description: "Developed Cars (C2S automotive marketplace), General Consultation (B2B consulting platform) and Super School, all built on Clean Architecture with GetX.",
    highlights: ["C2S automotive marketplace", "B2B consulting platform", "Clean Architecture with GetX"],
  },
  {
    company: "Self-employed",
    role: "Freelance Flutter Developer",
    period: "2022",
    description: "Delivered Az-Cash and El Aqarat as an independent developer. Completed Flutter MVVM and Advanced Clean Architecture certifications.",
    highlights: ["First production apps", "MVVM & Clean Architecture certs"],
  },
];

export const testimonials = [
  {
    name: "Mutasim issa",
    role: "CTO at Sourcya",
    text: "Omar consistently delivered high-quality Flutter apps on tight deadlines. His architecture decisions and attention to performance made a real difference in our product delivery.",
  },
  {
    name: "Ahmed Saeed",
    role: "CTO at Drop Me",
    text: "Working with Omar was a great experience. His deep understanding of Clean Architecture and GetX patterns helped us maintain a scalable codebase across multiple projects.",
  },
  {
    name: "Ahmed Eslam",
    role: "CTO at Mafrooz",
    text: "Omar's performance optimization work on our recycling platform reduced load times. He's a problem-solver who genuinely cares about user experience.",
  },
];
