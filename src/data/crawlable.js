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
  role: "Senior Flutter Engineer",
  tagline: "I build mobile systems that stay reliable after they reach production.",
  focus: "Architecture · Realtime Systems · Performance · Android · iOS · Web",
  roles: [
    "Senior Flutter Engineer",
    "Mobile App Developer",
    "Clean Architecture Expert",
  ],
  college: "Menoufia University",
  collegeUrl: "https://www.menofia.edu.eg/",
  avatarUrl: "/assets/avatar-4.png",
  status: "Open to select senior opportunities",
  aboutText: "Senior Flutter Engineer from Egypt with 4+ years building production mobile and web systems across Android, iOS, and Web — architecture, realtime data, and performance that survives production.",
  aboutText1: "I didn't take the conventional route into engineering. I graduated in Commerce (English Section) from ",
  aboutText2: ", then built my way into software through production work — one shipped application, architectural problem and engineering responsibility at a time. Today I deliver 22+ production apps across logistics, tracking, recycling, education and workforce platforms.",
};

export const skillStats = [
  { label: "Years Building", value: "4+" },
  { label: "Shipped Products", value: "22+" },
  { label: "Active Repos", value: "22" },
  { label: "Shipped Features", value: "61" },
];

export const proofRail = [
  "4+ years building and shipping production systems",
  "22+ shipped products across Android, iOS & Web",
  "61+ production features delivered",
  "22 active repositories owned or touched",
  "534 commits across 12 months",
];

export const facts = [
  "Flutter Expert",
  "22+ Production Apps",
  "Clean Architecture",
  "Performance Optimizer",
  "Team Mentor",
];

export const engineeringPhilosophy = [
  {
    principle: "Build for the second year, not only the first release.",
    detail: "Architecture decisions are made assuming the product will still be alive — and growing — 18 months from now.",
  },
  {
    principle: "Make failure states explicit.",
    detail: "Offline, timeout, reconnect and error states are designed as first-class UI, not afterthoughts.",
  },
  {
    principle: "Measure before optimizing.",
    detail: "No premature performance work. Profile first, then target the actual bottleneck.",
  },
  {
    principle: "Prefer reusable systems over repeated heroics.",
    detail: "If a pattern appears in three apps, it becomes a shared package or abstraction — not a fourth copy.",
  },
  {
    principle: "Leave the codebase cheaper to change than you found it.",
    detail: "Every PR should reduce the cost of the next change, even slightly. Compound maintainability.",
  },
];

export const engineeringCapabilities = [
  {
    capability: "Mobile Architecture",
    description: "Clean Architecture · SOLID · feature-first modularity · multi-app shared cores",
    evidence: ["TMT Track", "Rehla (4-role shared core)", "PlayX Ecosystem"],
  },
  {
    capability: "Realtime Systems",
    description: "WebSocket · Pusher · reconnect strategies · live GPS · trip state sync",
    evidence: ["TMT Track", "Kold", "Drop Me", "Rehla"],
  },
  {
    capability: "Networking & APIs",
    description: "playx_network · Dio · REST · streaming/SSE · API migration across apps",
    evidence: ["Sourcya (8+ apps migrated)", "Nasni", "Arbeta", "Ammena"],
  },
  {
    capability: "Performance & Profiling",
    description: "Flutter DevTools · background GPS tuning · battery vs accuracy trade-offs",
    evidence: ["TMT Track", "Mafrooz", "Rehla"],
  },
  {
    capability: "Native Integration",
    description: "Platform channels · Kotlin/Swift · foreground services · iOS background tasks",
    evidence: ["TMT Track", "Drop Me", "Rehla"],
  },
  {
    capability: "CI/CD & Release Engineering",
    description: "Fastlane · Codemagic · GitHub Actions · flavors · multi-app release matrix",
    evidence: ["Sourcya", "Rehla (4 apps)", "Drop Me"],
  },
];

export const engineeringNotes = [
  {
    title: "Designing resilient WebSocket reconnect flows in Flutter",
    summary: "Why exponential backoff with jitter, stale-data timeouts, and last-known-position fallback beat naive auto-reconnect — and how to keep the UI honest during disconnects.",
    tags: ["Realtime", "WebSocket", "Reliability"],
    readTime: "4 min",
  },
  {
    title: "Background GPS: accuracy vs battery vs platform restrictions",
    summary: "A decision framework for choosing accuracy tiers, foreground services vs background tasks, and movement-based switching — tested across driver devices running 8–12 hour shifts.",
    tags: ["Performance", "GPS", "Android", "iOS"],
    readTime: "5 min",
  },
  {
    title: "When GetX scales — and when architecture around it matters more",
    summary: "GetX is fast to ship with, but seniority is knowing when the real architectural problem is no longer the state manager. A field guide from 22+ production apps.",
    tags: ["Architecture", "State Management", "GetX"],
    readTime: "4 min",
  },
  {
    title: "Reducing repeated work across a multi-app Flutter ecosystem",
    summary: "How shared cores, reusable packages (playx_network, sourcya_in_app_rating), and flavor-driven build matrices turn 4 apps from 4x the effort into 1x with role-specific shells.",
    tags: ["Architecture", "Multi-app", "Reuse"],
    readTime: "5 min",
  },
];

export const aiEngineering = [
  {
    question: "How I use AI for code exploration",
    answer: "AI helps me enter unfamiliar codebases faster — generating maps, surfacing call sites, and explaining legacy patterns before I touch anything. It accelerates understanding, not decisions.",
  },
  {
    question: "How I constrain generated code",
    answer: "Generated code is treated as a draft, not a merge candidate. It must pass the same lint, tests and architecture rules as hand-written code — and be reviewed for edge cases the model didn't consider.",
  },
  {
    question: "How I validate architecture decisions",
    answer: "AI can propose options, but the trade-off analysis (battery vs accuracy, realtime vs polling, shared core vs per-app) stays human-owned. I use AI to stress-test my reasoning, not replace it.",
  },
  {
    question: "How I use MCP / context tooling without outsourcing judgment",
    answer: "MCP servers and context tools give me richer project state, but engineering judgment — what to build, what to refuse, what to refactor — remains mine. AI is an accelerant, not an autopilot.",
  },
];

export const careerEvolution = [
  {
    year: "2022",
    milestone: "First production systems",
    detail: "Started professional journey with Az-Cash & El Aqarat. Completed Flutter MVVM and Advanced Clean Architecture certifications. Shipped first production apps and established core architecture discipline.",
  },
  {
    year: "2023",
    milestone: "Architecture discipline & first lead ownership",
    detail: "Delivered Cars (C2S marketplace) and General Consultation with Clean Architecture + BLoC. Took on Lead Flutter Developer role at Drop Me — building realtime rewards, gamification and Firebase integration for a consumer recycling app.",
  },
  {
    year: "2024",
    milestone: "Multi-product delivery",
    detail: "Joined Semicolon. Shipped Zaakr, 3M Physics, Super School and E-learning platforms. Applied clean architecture and BLoC patterns consistently across all projects — building the discipline of repeatable delivery.",
  },
  {
    year: "2025",
    milestone: "Realtime & platform-scale systems",
    detail: "Joined Sourcya. Built multi-app delivery & workforce platforms from scratch — TMT Track (realtime GPS), Nasni, Kold (realtime monitoring), Rehla (multi-role ride-hailing). Led API migration across 8+ apps and performance optimization at Mafrooz.",
  },
  {
    year: "2026",
    milestone: "Multi-app ecosystems & reusable engineering infrastructure",
    detail: "Senior Flutter Engineer at Sourcya. 60+ shipped features, 534 commits across 22 repos. Built sourcya_in_app_rating package (5+ apps), enhanced PlayX ecosystem (streaming, interceptors, path params), and configured Staging/Production flavors for multi-app releases.",
  },
];

export const projectData = [
  {
    name: "TMT Track",
    tagline: "Realtime fleet intelligence across Android, iOS & Web",
    description: "Real-time GPS tracking platform for fleet management, live tracking, and geofencing across Android, iOS, and Web.",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "WebSocket", "GPS", "OSM"],
    live: "https://gps.tmtx.io/",
    github: "",
    category: ["Mobile", "Web"],
    flagship: true,
    caseStudy: {
      context: "Live tracking and geofencing platform where stale data or unreliable background execution directly damages the product — fleet operators depend on sub-minute location freshness.",
      challenge: "Maintain reliable live location updates despite network interruptions, Android/iOS lifecycle restrictions, and aggressive OS background-kill policies — without draining battery on driver devices that run 8–12 hour shifts.",
      ownership: [
        "Flutter client architecture across Android, iOS & Web",
        "Realtime state layer (WebSocket connection lifecycle + reconnection)",
        "Networking via playx_network / Dio with streaming + path params",
        "Background location acquisition and foreground service strategy",
        "Cross-platform delivery and store releases",
      ],
      decisions: [
        { title: "WebSocket reconnect strategy", detail: "Implemented exponential backoff with jitter and a stale-data timeout so the UI degrades gracefully (last-known position) instead of showing a dead connection." },
        { title: "Background GPS lifecycle", detail: "Foreground service on Android + background-task scheduling on iOS, with accuracy tiers switched dynamically based on movement detection to balance battery and freshness." },
        { title: "Single codebase, three platforms", detail: "Conditional platform code kept behind a location-service abstraction so the Web build shares the same state and networking layers as mobile." },
      ],
      architecture: ["GPS device / user", "Network layer", "API + WebSocket", "Flutter data layer", "Reactive state (GetX)", "Map / UI"],
      impact: [
        "Shipped to Google Play, App Store & Web — all three live in production",
        "Sub-minute location freshness sustained across network drops",
        "Single Flutter codebase serving 3 platforms with shared realtime + networking layers",
      ],
    },
    platforms: [
      { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.altatawwar.tmt.track.app" },
      { name: "App Store", url: "https://apps.apple.com/ms/app/tmt-live-app/id6749963131" },
      { name: "Web App", url: "https://gps.tmtx.io/" },
    ],
  },
  {
    name: "Drop Me",
    tagline: "Circular recovery mobile platform with realtime rewards",
    description: "Consumer-facing circular recovery platform connecting verified recycling actions with real-time rewards, gamification and sustainability engagement.",
    tech: ["Flutter", "Dart", "Firebase", "GetX", "Dio", "WebSocket"],
    live: "https://play.google.com/store/apps/details?id=com.dropme.recycling",
    github: "",
    category: ["Mobile"],
    flagship: true,
    caseStudy: {
      context: "Consumer-facing layer of a circular recovery ecosystem — users scan, deposit and earn rewards for verified recycling actions in real time.",
      challenge: "Sync rewards state across Firebase, a REST backend and a WebSocket channel so that a verified recycling action reflects in the user's balance and gamification progress within seconds — while the app is backgrounded or on flaky mobile data.",
      ownership: [
        "Lead Flutter delivery for the consumer-facing app (part-time, since 2023)",
        "Flutter architecture, realtime rewards state & API integration",
        "WebSocket flows for live reward confirmation",
        "Firebase integration (auth, remote config, push)",
        "Production releases to Google Play & App Store",
      ],
      decisions: [
        { title: "Multi-source realtime state", detail: "Unified rewards state behind a single reactive model that reconciles Firebase, REST and WebSocket events so the UI never shows conflicting balances." },
        { title: "Offline-tolerant reward confirmation", detail: "Optimistic UI update with a reconciliation pass on reconnect, so users see immediate feedback even on poor networks." },
        { title: "Gamification as a state concern, not a UI concern", detail: "Kept streaks, badges and progress in a dedicated reactive layer decoupled from screens, making new gamification features additive without touching existing UI." },
      ],
      architecture: ["User action", "Firebase auth/config", "REST API", "WebSocket rewards", "Reactive state", "Gamification + UI"],
      impact: [
        "1K+ downloads · 5.0 rating on Google Play (snapshot: Aug 2026)",
        "Live on Google Play & App Store",
        "Reward confirmation latency kept within seconds across flaky mobile data",
      ],
    },
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
    tagline: "Pickup & waste-tracking logistics platform",
    description: "Recycling pickup and waste-tracking logistics platform with pickup scheduling, collector/factory management, quotations, orders, and a three-tier responsive inventory system.",
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
    tagline: "Multi-role ride-hailing platform — Driver, Passenger, Operator, Station",
    description: "Ride-hailing & transportation platform with multi-role architecture (Driver, Passenger, Operator, Station).",
    tech: ["Flutter", "Dart", "GetX", "playx_network", "Dio", "WebSocket", "GPS", "OSM"],
    live: "https://play.google.com/store/apps/details?id=sa.com.altatawwar.rehla.driver.app",
    github: "",
    category: ["Mobile"],
    flagship: true,
    caseStudy: {
      context: "A ride-hailing ecosystem with four distinct roles — Driver, Passenger, Operator and Station — each a separate Flutter app sharing one domain and one backend.",
      challenge: "Deliver four role-specific apps (two mobile, two web) from one Flutter codebase without role logic leaking into shared layers, while keeping realtime trip state consistent across all roles viewing the same trip.",
      ownership: [
        "Flutter architecture across 4 role apps (Driver, Passenger, Operator, Station)",
        "Realtime trip state synchronization over WebSocket",
        "Shared networking, models and location-service abstractions",
        "Per-app flavor/build configuration (namespace, MainActivity, signing)",
        "Cross-platform delivery: Android, iOS, and Web for Operator & Station",
      ],
      decisions: [
        { title: "Shared core, role-specific shells", detail: "Extracted a common core (networking, models, realtime, location) used by all four apps, with role-specific entry points and feature modules — so a fix in trip state propagation lands once, not four times." },
        { title: "Trip state as a single source of truth", detail: "One reactive trip model fed by WebSocket events, consumed differently per role screen — preventing the classic multi-app drift where Driver sees 'accepted' but Passenger sees 'searching'." },
        { title: "Flavor-driven build matrix", detail: "Per-app flavors with matching namespaces, iOS xcconfig wiring and Android source sets, enabling 4 production apps from one repository." },
      ],
      architecture: ["Role app shell", "Shared core (network + realtime + location)", "WebSocket trip events", "Reactive trip state", "Role-specific UI"],
      impact: [
        "4 production apps shipped: Driver (Play + App Store), Passenger (Play), Operator (Play + Web), Station (Web)",
        "One shared core means realtime trip fixes propagate to all roles from a single change",
        "Sourcya ecosystem flagship — demonstrates multi-app architecture at scale",
      ],
    },
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