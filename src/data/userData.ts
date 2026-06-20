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
  collegeUrl: "https://menofia.edu.eg/",
  avatarUrl: "/assets/ME.jpg",
  status: "Available for work",
  aboutText: "Passionate Flutter Developer from Egypt with 4+ years of experience building production-level mobile applications across Android, iOS, and Web platforms.",
  aboutText1: "I'm Omar Saeed, based in Egypt. I graduated in Commerce (English Section) from ",
  aboutText2: ". I specialize in building high-performance cross-platform mobile apps with Flutter, following Clean Architecture and SOLID principles. I've delivered 16+ production apps and mentored junior developers along the way.",
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

export const skills = [
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Dart", icon: "https://cdn.simpleicons.org/dart" },
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin" },
      { name: "iOS", icon: "https://cdn.simpleicons.org/apple", invertDark: true },
      { name: "Android", icon: "https://cdn.simpleicons.org/android" },
    ],
  },
  {
    category: "State Management",
    items: [
      { name: "BLoC/Cubit", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "GetX", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Provider", icon: "https://cdn.simpleicons.org/flutter" },
    ],
  },
  {
    category: "Backend & Services",
    items: [
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
      { name: "REST API", icon: "https://cdn.simpleicons.org/postman" },
      { name: "WebSocket", icon: "https://cdn.simpleicons.org/websocket" },
      { name: "Pusher", icon: "https://cdn.simpleicons.org/pusher" },
      { name: "Dio", icon: "https://cdn.simpleicons.org/dart" },
    ],
  },
  {
    category: "Persistence",
    items: [
      { name: "Hive", icon: "https://cdn.simpleicons.org/hive" },
      { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite" },
      { name: "SharedPrefs", icon: "https://cdn.simpleicons.org/flutter" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    ],
  },
  {
    category: "CI/CD & Testing",
    items: [
      { name: "Fastlane", icon: "https://cdn.simpleicons.org/fastlane" },
      { name: "Codemagic", icon: "https://cdn.simpleicons.org/codemagic" },
      { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions" },
      { name: "flutter_test", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Mocktail", icon: "https://cdn.simpleicons.org/dart" },
    ],
  },
  {
    category: "Navigation & Design",
    items: [
      { name: "GoRouter", icon: "https://cdn.simpleicons.org/flutter" },
      { name: "Material 3", icon: "https://cdn.simpleicons.org/materialdesign" },
    ],
  },
];

export const facts = [
  "Flutter Expert",
  "16+ Production Apps",
  "Clean Architecture",
  "Performance Optimizer",
  "Team Mentor",
  "Bilingual (AR/EN)",
];

export const timeline = [
  {
    year: "2025",
    detail:
      "Senior Flutter Developer at Sourcya — building multi-app delivery & workforce platforms.",
    more:
      "Working on TMT Track, Nasni, Kold, Arbeta, Rehla, and Ammena. GPS tracking, ride-hailing, and logistics apps with cross-platform support (Android, iOS, Web). Leading architecture decisions and mentoring team members.",
  },
  {
    year: "2025",
    detail:
      "Senior Flutter Developer at Mafrooz — performance optimization & recycling platform.",
    more:
      "Led performance optimization efforts achieving 70% faster load times. Built the Mafrooz recycling services platform with pickup scheduling and waste tracking.",
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
  {
    year: "2019",
    detail:
      "Began exploring programming and mobile development at Menoufia University.",
    more:
      "Started B.Sc. in Commerce (English Section) at Menoufia University. Discovered Flutter and built a strong foundation in Dart and mobile app architecture.",
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
    tech: ["Flutter", "Dart", "Firebase", "GPS", "WebSocket", "BLoC"],
    live: "https://gps.tmtx.io/",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.tmt.track.app" },
      { name: "App Store", url: "https://apps.apple.com/ms/app/tmt-live-app/id6749963131" },
      { name: "Web App", url: "https://gps.tmtx.io/" },
    ],
    downloads: "10K+",
    rating: "⭐ 5",
  },
  {
    name: "Drop Me",
    description: "Community-driven bottle recycling initiative with rewards system, community engagement, and sustainability tracking.",
    tech: ["Flutter", "Dart", "Firebase", "GetX", "Pusher"],
    live: "https://play.google.com/store/apps/details?id=com.dropme.recycling",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.dropme.recycling" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/drop-me-recycle-in-seconds/id6748382942" },
    ],
    downloads: "1K+",
    rating: "⭐ 5",
  },
  {
    name: "Nasni",
    description: "Monitoring and tracking platform for assets or people inside buildings with order management and subscription plans.",
    tech: ["Flutter", "Dart", "Firebase", "BLoC", "REST API"],
    live: "https://app.nasni.io/",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.nasni.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/nasni/id6754703562" },
      { name: "Web App", url: "https://app.nasni.io/" },
    ],
    downloads: "500+",
    rating: "⭐ 5",
  },
  {
    name: "Kold",
    description: "Real-time temperature and humidity monitoring platform for warehouses, storage rooms, and sensitive inventory areas.",
    tech: ["Flutter", "Dart", "Firebase", "BLoC", "WebSocket"],
    live: "https://app.koldx.io/",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.kold.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/kold/id6754703360" },
      { name: "Web App", url: "https://app.koldx.io/" },
    ],
    downloads: "500+",
    rating: "⭐ 5",
  },
  {
    name: "Arbeta",
    description: "Workforce management platform with worker matching, job assignments, and attendance tracking for Android and iOS.",
    tech: ["Flutter", "Dart", "Firebase", "BLoC", "REST API"],
    live: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.arbeta.app",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.arbeta.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/arbeta-workforce/id6746787214" },
    ],
    downloads: "100+",
    rating: "⭐ 5",
  },
  {
    name: "Ammena",
    description: "Medical services platform with appointment booking, medical service management, and patient tracking.",
    tech: ["Flutter", "Dart", "Firebase", "GetX", "REST API"],
    live: "https://swnw.amenaa.com/",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=io.sourcya.swnw.app" },
      { name: "Web App", url: "https://swnw.amenaa.com/" },
    ],
    downloads: "—",
    rating: "—",
  },
  {
    name: "Mafrooz",
    description: "Recycling services platform with recycling management, pickup scheduling, and waste tracking.",
    tech: ["Flutter", "Dart", "Firebase", "BLoC", "REST API"],
    live: "https://hub.app.mfroz.com/",
    github: "",
    category: "Web",
    platforms: [
      { name: "Web App", url: "https://hub.app.mfroz.com/" },
    ],
    downloads: "—",
    rating: "—",
  },
  {
    name: "Rehla",
    description: "Ride-hailing & transportation platform with multi-role architecture (Driver, Passenger, Operator, Station).",
    tech: ["Flutter", "Dart", "Firebase", "BLoC", "WebSocket", "GPS"],
    live: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.driver.app",
    github: "",
    category: "Mobile",
    platforms: [
      { name: "Driver - Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.driver.app" },
      { name: "Driver - App Store", url: "https://apps.apple.com/eg/app/rehla-driver/id6759146405" },
      { name: "Passenger - Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.rehla.passenger.app" },
    ],
    downloads: "—",
    rating: "—",
  },
  {
    name: "Cars",
    description: "C2S marketplace for automotive services with service provider matching, maintenance booking, and spare parts.",
    tech: ["Flutter", "Dart", "BLoC", "Clean Architecture", "REST API"],
    live: "",
    github: "https://github.com/OmarSaeed20/Cars.git",
    category: "Mobile",
    platforms: [],
    downloads: "—",
    rating: "—",
  },
  {
    name: "General Consultation",
    description: "B2B consulting platform connecting businesses with experts across marketing, finance, and strategy domains.",
    tech: ["Flutter", "Dart", "GetX", "Firebase", "WebSocket"],
    live: "",
    github: "https://github.com/OmarSaeed20/General-Consultation-.git",
    category: "Mobile",
    platforms: [],
    downloads: "—",
    rating: "—",
  },
];

export const resume = {
  "flutter-developer": "https://github.com/OmarSaeed20",
};
