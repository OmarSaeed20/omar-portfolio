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
      "Senior Flutter Engineer at Sourcya — multi-app delivery & workforce platforms across Android, iOS & Web.",
    more:
      "Joined Sourcya after leading performance optimization at Mafrooz. Led API migration across 8+ apps (rehla-operator, madaan-operator, tmt-gps), built the sourcya_in_app_rating Flutter package integrated into 5+ apps, configured Staging/Production flavors for 3 apps, delivered the Rehla Operator app from scratch (trips, routes, drivers, reports with PDF export), built the Mafrooz Hub V3.0 redesign with three-tier responsive system, and enhanced the PlayX ecosystem (playx_network streaming, interceptors, path params). Earlier in 2025: built the Mafrooz Hub app from scratch, scaffolded the Amenaa (SWNW) medical app, built TMT GPS vehicle group management, and delivered Nasni entities & building dashboard, Kold live monitor & dashboard.",
  },
  {
    year: "2025",
    detail:
      "Senior Flutter Engineer at Mafrooz — performance optimization & waste-tracking logistics platform.",
    more:
      "Led performance optimization efforts. Built the Mafrooz recycling services platform with pickup scheduling and waste tracking.",
  },
  {
    year: "2024",
    detail:
      "Flutter Developer at Semicolon — built Zaakr, 3M Physics, and E-learning apps.",
    more:
      "Developed multiple production apps including Zaakr, 3M Physics, Super School, and E-learning platforms. Applied clean architecture and BLoC patterns across all projects.",
  },
  {
    year: "2023",
    detail:
      "Flutter Developer at Nofalseo — built Cars, General Consultation, and more.",
    more:
      "Developed Cars (C2S automotive marketplace) and General Consultation (B2B consulting platform) using Clean Architecture with BLoC state management.",
  },
  {
    year: "2023",
    detail:
      "Lead Flutter Developer at Drop Me — circular recovery mobile platform (side project).",
    more:
      "Built real-time rewards system and gamification features for sustainable practices. Maintained alongside full-time roles.",
  },
  {
    year: "2022",
    detail:
      "Freelance Flutter Developer — started professional journey with Az-Cash & El Aqarat.",
    more:
      "Completed Flutter MVVM with Clean Architecture (22h) and Advanced Flutter Clean Architecture (8h) certifications. Built first production apps and established core skills.",
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
  "flutter-developer": "/assets/Omar-Saeed-Senior-Flutter-Engineer-Resume.pdf",
};

export const experience = [
  {
    company: "Sourcya",
    role: "Senior Flutter Engineer",
    period: "Sep 2025 – Present",
    description: "Building multi-app delivery & workforce platforms (TMT Track, Nasni, Kold, Arbeta, Rehla, Ammena, Mafrooz, Madaan) across Android, iOS & Web using GetX + PlayX ecosystem. Led API migration across 8+ apps, built the sourcya_in_app_rating package, and configured Staging/Production flavors for multi-app releases.",
    highlights: ["22 repos", "API migration across 8+ apps", "sourcya_in_app_rating package", "PlayX ecosystem enhancements"],
  },
  {
    company: "Mafrooz",
    role: "Senior Flutter Engineer",
    period: "2025",
    description: "Led performance optimization. Built the pickup & waste-tracking logistics platform with pickup scheduling, collector/factory management, and a three-tier responsive inventory system.",
    highlights: ["Waste-tracking logistics platform", "Performance optimization"],
  },
  {
    company: "Semicolon",
    role: "Flutter Developer",
    period: "2024",
    description: "Developed multiple production apps including Zaakr, 3M Physics, Super School, and E-learning platforms with clean architecture and BLoC patterns.",
    highlights: ["Multiple production apps", "BLoC & Clean Architecture"],
  },
  {
    company: "Nofalseo",
    role: "Flutter Developer",
    period: "2023",
    description: "Built Cars (C2S automotive marketplace) and General Consultation (B2B consulting platform) using Clean Architecture with BLoC state management.",
    highlights: ["C2S marketplace", "B2B consulting platform"],
  },
  {
    company: "Drop Me",
    role: "Lead Flutter Developer (Part-time)",
    period: "2023 – Present",
    description: "Led Flutter delivery for the consumer-facing layer of a circular recovery ecosystem — connecting verified recycling actions with real-time rewards, gamification and sustainability engagement across Android & iOS.",
    highlights: ["Realtime rewards & gamification", "Ongoing part-time"],
  },
  {
    company: "Freelance",
    role: "Flutter Developer",
    period: "2022 – 2023",
    description: "Started professional journey with Az-Cash & El Aqarat. Completed Flutter MVVM and Advanced Clean Architecture certifications. Shipped first production apps.",
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
