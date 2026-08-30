import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export const personalInfo = {
  name: "Omar Saeed",
  alias: "OmarSaeed20",
  shortAlias: "OS",
  location: "Egypt",
  role: "Flutter Developer",
  roles: [
    "Flutter Developer",
    "Mobile App Developer",
    "Clean Architecture Expert",
  ],
  college: "Menoufia University",
  collegeUrl: "https://www.menofia.edu.eg/",
  avatarUrl: "/assets/avatar-4.png",
  status: "Available for work",
  aboutText: "Passionate Flutter Developer from Egypt with 4+ years of experience building production-level mobile applications across Android, iOS, and Web platforms.",
  aboutText1: "I'm Omar Saeed, based in Egypt. I graduated in Commerce (English Section) from ",
  aboutText2: ". I specialize in building high-performance cross-platform mobile apps with Flutter, following Clean Architecture and SOLID principles. I've delivered 22+ production apps and mentored junior developers along the way.",
};

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
export type SkillCategory = {
  category: string;
  description: string;
  items: Skill[];
};

export const skillStats = [
  { label: "Years Experience", value: "4+" },
  { label: "Production Apps", value: "22+" },
  { label: "Active Repos", value: "22" },
  { label: "Shipped Features", value: "61" },
];

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
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase", level: "Advanced" },
      { name: "Pusher", icon: "https://cdn.simpleicons.org/pusher", level: "Advanced" },
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
      { name: "MCP", icon: "https://cdn.simpleicons.org/modelcontextprotocol/D97757", level: "Advanced" },
      { name: "Anthropic", icon: "https://cdn.simpleicons.org/anthropic/D97757", level: "Intermediate" },
      { name: "Ollama", icon: "https://cdn.simpleicons.org/ollama/000000", level: "Intermediate", invertDark: true },
      { name: "Z.ai", icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg", level: "Intermediate" },
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

export const facts = [
  "Flutter Expert",
  "22+ Production Apps",
  "Clean Architecture",
  "Performance Optimizer",
  "Team Mentor",
];

export const timeline = [
  {
    year: "2026",
    detail:
      "Senior Flutter Developer at Sourcya — 60+ shipped features across Android, iOS & Web.",
    more:
      "Led API migration across 8+ apps (rehla-operator, madaan-operator, tmt-gps), built the sourcya_in_app_rating Flutter package integrated into 5+ apps, configured Staging/Production flavors for 3 apps, delivered the Rehla Operator app from scratch (trips, routes, drivers, reports with PDF export), built the Mafrooz Hub V3.0 redesign with three-tier responsive system, and enhanced the PlayX ecosystem (playx_network streaming, interceptors, path params). 534 git commits across 22 active repositories in 12 months.",
  },
  {
    year: "2025",
    detail:
      "Senior Flutter Developer at Sourcya — built multi-app delivery & workforce platforms from scratch.",
    more:
      "Built the Mafrooz Hub app from scratch (auth, navigation, dashboard, collectors, factories, quotations, orders, settings, transactions, inventory with responsive table system). Scaffolded the Amenaa (SWNW) medical app with doctor visit reports, prescriptions, vitals, and web version. Built TMT GPS vehicle group management. Delivered Nasni entities & building dashboard, Kold live monitor & dashboard, and Rehla Passengers rebranding.",
  },
  {
    year: "2025",
    detail:
      "Senior Flutter Developer at Mafrooz — performance optimization & recycling platform.",
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
      "Lead Flutter Developer at Drop Me — community-driven recycling platform (side project).",
    more:
      "Built real-time rewards system and gamification features for sustainable practices. 1K+ downloads, 5-star rating. Maintained alongside full-time roles.",
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
    value: "linkedin.com/in/omar-saeed-5a25491ba",
    href: "https://www.linkedin.com/in/omar-saeed-5a25491ba",
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

export const projectData = [
  {
    name: "TMT Track",
    description: "Real-time GPS tracking platform for fleet management, live tracking, and geofencing across Android, iOS, and Web.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "WebSocket", "GPS", "OSM"],
    live: "https://gps.tmtx.io/",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.tmt.track.app" },
      { name: "App Store", url: "https://apps.apple.com/ms/app/tmt-live-app/id6749963131" },
      { name: "Web App", url: "https://gps.tmtx.io/" },
    ],
  },
  {
    name: "Drop Me",
    description: "Community-driven bottle recycling initiative with rewards system, community engagement, and sustainability tracking.",
    tech: ["Flutter", "Dart", "Firebase", "GetX", "Dio", "WebSocket"],
    live: "https://play.google.com/store/apps/details?id=com.dropme.recycling",
    github: "",
    category: ["Mobile"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dropme.recycling" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/drop-me-recycle-in-seconds/id6748382942" },
    ],
  },
  {
    name: "Nasni",
    description: "Monitoring and tracking platform for assets or people inside buildings with order management and subscription plans.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "https://app.nasni.io/",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.nasni.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/nasni/id6754703562" },
      { name: "Web App", url: "https://app.nasni.io/" },
    ],
  },
  {
    name: "Kold",
    description: "Real-time temperature and humidity monitoring platform for warehouses, storage rooms, and sensitive inventory areas.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "WebSocket"],
    live: "https://app.koldx.io/",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.kold.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/kold/id6754703360" },
      { name: "Web App", url: "https://app.koldx.io/" },
    ],
  },
  {
    name: "Arbeta",
    description: "Workforce management platform with worker matching, job assignments, and attendance tracking for Android and iOS.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.arbeta.app",
    github: "",
    category: ["Mobile"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.arbeta.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/arbeta-workforce/id6746787214" },
    ],
  },
  {
    name: "Ammena",
    description: "Medical services platform with appointment booking, medical service management, and patient tracking.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "https://swnw.amenaa.com/",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=io.sourcya.swnw.app" },
      { name: "Web App", url: "https://swnw.amenaa.com/" },
    ],
  },
  {
    name: "Mafrooz",
    description: "Recycling services platform with recycling management, pickup scheduling, and waste tracking.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "https://hub.app.mfroz.com/",
    github: "",
    category: ["Web"],
    platforms: [
      { name: "Web App", url: "https://hub.app.mfroz.com/" },
    ],
  },
  {
    name: "Rehla",
    description: "Ride-hailing & transportation platform with multi-role architecture (Driver, Passenger, Operator, Station).",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "WebSocket", "GPS", "OSM"],
    live: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.driver.app",
    github: "",
    category: ["Mobile"],
    platforms: [
      { name: "Driver - Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.driver.app" },
      { name: "Driver - App Store", url: "https://apps.apple.com/eg/app/rehla-driver/id6759146405" },
      { name: "Passenger - Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.rehla.passenger.app" },
    ],
  },
  {
    name: "Madaan Operator",
    description: "Facility workforce management & operations dashboard with KPI summaries, operations overview donut charts, jobs performance tables, and facilities serviced analytics.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [],
  },
  {
    name: "Mafrooz Cockpit",
    description: "Admin management app for the Mafrooz recycling platform with full categories & items module, pricing management, and Figma-matched UI.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "",
    github: "",
    category: ["Web"],
    platforms: [],
  },
  {
    name: "Rehla Ride",
    description: "Almaarefa University ride app rebranded and configured for multi-client environments with Rehla Ride API integration for trips.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API", "Flavors"],
    live: "",
    github: "",
    category: ["Mobile"],
    platforms: [],
  },
  {
    name: "Maydan",
    description: "Visitor route tracking app with guest navigation features, wakelock for navigation, and contact support.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "",
    github: "",
    category: ["Mobile"],
    platforms: [],
  },
  {
    name: "Ujrah Driver",
    description: "Driver app with trip pricing configuration, vacant sign diagnostics, Datahub configuration, and auto-port detection.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "",
    github: "",
    category: ["Mobile"],
    platforms: [],
  },
  {
    name: "PlayX Ecosystem",
    description: "Open-source Flutter package ecosystem: playx_network (streaming/SSE, interceptors, path params), playx_core (extensions, mapper utils), playx_version_update.",
    tech: ["Flutter", "Dart", "Dio", "REST API", "Open Source"],
    live: "https://github.com/playx-flutter",
    github: "https://github.com/playx-flutter",
    category: ["Package"],
    platforms: [],
  },
  {
    name: "Cars",
    description: "C2S marketplace for automotive services with service provider matching, maintenance booking, and spare parts.",
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API"],
    live: "",
    github: "https://github.com/OmarSaeed20/Cars.git",
    category: ["Mobile"],
    platforms: [],
  },
  {
    name: "General Consultation",
    description: "B2B consulting platform connecting businesses with experts across marketing, finance, and strategy domains.",
    tech: ["Flutter", "Dart", "GetX", "Firebase", "WebSocket"],
    live: "",
    github: "https://github.com/OmarSaeed20/General-Consultation-.git",
    category: ["Mobile"],
    platforms: [],
  },
];

export const resume = {
  "flutter-developer": "https://github.com/OmarSaeed20",
};

export const experience = [
  {
    company: "Sourcya",
    role: "Senior Flutter Developer",
    period: "2025 – Present",
    description: "Building 22+ multi-app delivery & workforce platforms (TMT Track, Nasni, Kold, Arbeta, Rehla, Ammena, Mafrooz, Madaan). 61 shipped features across Android, iOS & Web using GetX + PlayX ecosystem.",
    highlights: ["22 repos", "API migration across 8+ apps", "sourcya_in_app_rating package", "PlayX ecosystem enhancements"],
  },
  {
    company: "Mafrooz",
    role: "Senior Flutter Developer",
    period: "2025",
    description: "Led performance optimization. Built the recycling services platform with pickup scheduling and waste tracking.",
    highlights: ["Production recycling platform"],
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
    description: "Built and maintain a community-driven recycling platform with real-time rewards system and gamification features for sustainable practices. 1K+ downloads, 5-star rating. Ongoing part-time alongside full-time roles.",
    highlights: ["Real-time rewards & Recycling platform", "1K+ downloads · 5-star rating", "Ongoing part-time"],
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
