/**
 * Plain-JS crawlable data — NO TypeScript types, NO JSX, NO icon imports.
 *
 * This is the single source of truth for content that must be present in the
 * initial HTML response (for SEO / crawlers / link previews that don't run JS).
 *
 * userData.ts imports these objects and adds icon-dependent data (contactItems).
 * The Vite prerender plugin imports this file directly at build time.
 */

export const personalInfo = {
  name: "Omar Saeed",
  alias: "OmarSaeed20",
  shortAlias: "OS",
  location: "Egypt",
  role: "Senior Flutter Developer",
  roles: [
    "Senior Flutter Developer",
    "Mobile App Developer",
    "Clean Architecture Expert",
  ],
  college: "Menoufia University",
  collegeUrl: "https://www.menofia.edu.eg/",
  avatarUrl: "/assets/avatar-4.png",
  status: "Open to new opportunities",
  aboutText: "Senior Flutter Developer from Egypt with 4+ years of experience building production-level mobile and web applications across Android, iOS, and Web platforms.",
  aboutText1: "I'm Omar Saeed, based in Egypt. I graduated in Commerce (English Section) from ",
  aboutText2: ". I specialize in building high-performance cross-platform apps with Flutter, following Clean Architecture and SOLID principles. I've delivered 22+ production apps and mentored junior developers along the way.",
};

export const skillStats = [
  { label: "Years Experience", value: "4+" },
  { label: "Production Apps", value: "22+" },
  { label: "Active Repos", value: "22" },
  { label: "Shipped Features", value: "61" },
];

export const facts = [
  "Flutter Expert",
  "22+ Production Apps",
  "Clean Architecture",
  "Performance Optimizer",
  "Team Mentor",
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
      { name: "Operator - Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.operator.app" },
      { name: "Operator - Web", url: "https://rehla-operator-app.vercel.app/" },
      { name: "Station - Web", url: "https://rehla-station-app.vercel.app/" },
    ],
  },
  {
    name: "Madaan Operator",
    description: "Facility workforce management & operations dashboard with KPI summaries, operations overview donut charts, jobs performance tables, and facilities serviced analytics.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.madaan.operator.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/madan-operator/id6780871967" },],
  },
  {
    name: "Rehla Ride",
    description: "Almaarefa University ride app rebranded and configured for multi-client environments with Rehla Ride API integration for trips.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API", "Flavors"],
    live: "https://rehla-ride-app.vercel.app/",
    github: "",
    category: ["Mobile", "Web"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.almaarefa.app" },
      { name: "App Store", url: "https://apps.apple.com/eg/app/almaarefa-university-rides/id6797461812" },
      { name: "Web App", url: "https://rehla-ride-app.vercel.app/" },
    ],
  },
  {
    name: "Maydan",
    description: "Visitor route tracking app with guest navigation features, wakelock for navigation, and contact support.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "REST API"],
    live: "",
    github: "",
    category: ["Mobile"],
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.maydan.app" },
    ],
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
    name: "General Consultation",
    description: "B2B consulting platform connecting businesses with experts across marketing, finance, and strategy domains.",
    tech: ["Flutter", "Dart", "GetX", "Firebase", "WebSocket"],
    live: "",
    github: "https://github.com/OmarSaeed20/general-consultation",
    category: ["Mobile"],
    platforms: [],
  },
];