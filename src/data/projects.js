// The products I've built under HazTech Services, told for employers: what it is, how it's built and the stack.
// Icons and product pages live on haztech.services, which is the consumer-facing site for the same products.

const HAZTECH = 'https://haztech.services';

export const PROJECTS = [
  {
    name: 'Bloop Brigade',
    icon: `${HAZTECH}/bloop-brigade.png`,
    url: `${HAZTECH}/bloop-brigade/`,
    kind: 'Game · PC, Mac, iPhone, iPad & Android',
    desc: 'A colourful co-op tower defence game for 1 to 4 players, out now on the Epic Games Store (PC and Mac), the App Store and Google Play.',
    points: [
      'Built solo in Godot 4: every mesh, material, UI theme and sound effect is generated in code, with no imported assets',
      'Online co-op through Epic Online Services, with seeded island generation so every player builds the same world, plus local split-screen for up to 4',
      'Adaptive soundtrack synthesised in code, with layers that build with the action',
      'Shipped in 9 languages with achievements on the Epic Games Store, Game Center and Google Play Games, plus leaderboards and cloud saves',
      'Custom low-level C++ PlayStation 5 rendering and networking port (AGC GPU driver, shader toolchain and PSN integration)',
      'Trailer, store screenshots and short-form videos are all rendered from the game by an automated pipeline',
    ],
    stack: ['Godot 4', 'C++', 'GDScript', 'Custom Shaders', 'Epic Online Services', 'Python'],
  },
  {
    name: 'Markaz',
    icon: `${HAZTECH}/markaz.png`,
    url: `${HAZTECH}/markaz/`,
    kind: 'App · iOS, Android, macOS, Windows, Linux & web',
    desc: 'An all-in-one companion for Muslims: prayer times, the Quran with audio, a Qibla compass, prayer guides and more.',
    points: [
      'One Flutter codebase live on six platforms and their stores',
      'Native extensions in Swift and Kotlin: widgets, Live Activities, Apple Watch, Wear OS, CarPlay and Android Auto',
      'Prayer times calculated offline on the device with astronomical formulas and 20+ calculation methods',
      'GCP and Firebase backend with TypeScript Cloud Functions and Firestore, and subscriptions through RevenueCat',
      'GitHub Actions CI/CD builds every platform and publishes releases, with store screenshots generated from the real app UI',
    ],
    stack: ['Flutter', 'Dart', 'Swift', 'Kotlin', 'GCP', 'Firebase', 'TypeScript', 'GitHub Actions'],
  },
  {
    name: 'Leap Launcher',
    icon: `${HAZTECH}/leap.png`,
    url: `${HAZTECH}/leap-launcher/`,
    kind: 'App · Android phones, tablets, foldables & TV',
    desc: 'A fast, clean home screen that keeps the stock Android feel and adds the controls people actually want. Used by 1.5K+ people every month.',
    points: [
      'Separate phone and Android TV apps built on a shared Kotlin core module',
      'Jetpack Compose UI tuned for touch, foldables, tablets and the TV remote',
      'Baseline Profiles, startup benchmarks and Firebase Crashlytics telemetry for fast, stable cold starts, even on older TVs',
      'Context-aware scenes and dock suggestions that learn entirely on the device',
      'Universal search, digital wellbeing, kids profiles and parental controls',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Android TV', 'Firebase', 'Gradle'],
  },
];
