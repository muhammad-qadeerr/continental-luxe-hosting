import heroImage from "@/assets/hero-property.jpg";

export interface Metric {
  label: string;
  value: string;
}

export interface WidgetItem {
  emoji: string;
  title: string;
  subtitle: string;
  value: string;
}

export interface Outcome {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CaseStudy {
  slug: string;
  image: string;
  /** Full location, e.g. "Destin, Florida" */
  location: string;
  /** Short location for badges, e.g. "Destin, FL" */
  locationShort: string;
  /** Card badge (rating or status) */
  badge: string;
  /** Category tag, e.g. "Revenue Growth" */
  tag: string;
  /** Portfolio label, e.g. "11 properties" */
  propertiesLabel: string;

  // --- Section card ---
  cardTitle: string;
  cardRating: string;
  cardQuote: string;
  cardMetrics: Metric[];

  // --- Detail page ---
  detailTitle: string;
  detailSubtitle: string;
  heroStats: Metric[];
  fullQuote: string;
  quoteAuthor: string;
  challenge: string[];
  approach: string[];
  builtHeading: string;
  built: string[];
  widgetTitle: string;
  widgetItems: WidgetItem[];
  widgetFooter: string;
  outcomes: Outcome[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "revenue-growth-destin",
    image: heroImage,
    location: "Destin, Florida",
    locationShort: "Destin, FL",
    badge: "4.85",
    tag: "Revenue Growth",
    propertiesLabel: "11 properties",

    cardTitle: "5 → 11 properties",
    cardRating: "4.50 → 4.85",
    cardQuote:
      "Revenue has never been this high in low seasons. Guests were actually happy to pay.",
    cardMetrics: [
      { label: "Revenue", value: "Record low-season" },
      { label: "Review score", value: "4.50 → 4.85" },
      { label: "Status achieved", value: "Superhost" },
    ],

    detailTitle:
      "How Personalized Upsells Turned Low Season Into a Revenue Growth Channel",
    detailSubtitle:
      "We helped a 5-listing host grow to 11 listings, improve reviews from 4.50 to 4.85, and achieve Superhost + Guest Favorite status in 3 months.",
    heroStats: [
      { label: "Properties", value: "5 → 11" },
      { label: "Review Score", value: "4.50 → 4.85" },
      { label: "Timeline", value: "3 months" },
      { label: "Status", value: "Superhost" },
    ],
    fullQuote:
      "My revenue has never been this high in low seasons. Guests were actually happy to pay because of the way offers were presented.",
    quoteAuthor: "STR Host, Destin FL",
    challenge: [
      "The host was struggling to increase revenue during low season. Bookings were still coming in, but the average value per reservation was not being maximized. Upsells were either not offered consistently or presented in a way that felt generic.",
      "The host also had no Superhost status and no Guest Favorite recognition, which limited visibility and pricing power on the platform.",
    ],
    approach: [
      "We built a personalized upsell system focused on timing, guest intent, and offer presentation. Instead of pushing random add-ons, each offer was positioned based on the guest's stay type, arrival time, booking behavior, and likely needs.",
      "The goal was to increase revenue without making guests feel sold to — every offer added genuine value to their stay.",
    ],
    builtHeading: "What We Implemented",
    built: [
      "Personalized early check-in offers",
      "Personalized late checkout offers",
      "Guest-specific add-ons by trip type",
      "Low-season offer bundles",
      "Improved guest communication flow",
      "Review improvement strategy",
      "Guest experience monitoring",
      "Scaling ops support (5 → 11 listings)",
    ],
    widgetTitle: "Personalized Upsells",
    widgetItems: [
      { emoji: "🌅", title: "Early Check-In", subtitle: "12:00 PM", value: "$35" },
      { emoji: "🧳", title: "Late Checkout", subtitle: "1:00 PM", value: "$45" },
      { emoji: "🥂", title: "Welcome Add-On", subtitle: "Anniversary", value: "$60" },
    ],
    widgetFooter: "+$140 upsell revenue this stay",
    outcomes: [
      { label: "Revenue", value: "Record low-season revenue", highlight: true },
      { label: "Reviews", value: "4.50 → 4.85" },
      { label: "Host Status", value: "Superhost achieved" },
      { label: "Guest Recognition", value: "Guest Favorite" },
      { label: "Timeline", value: "3 months" },
      { label: "Portfolio Growth", value: "5 → 11 listings" },
    ],
  },
  {
    slug: "claims-recovery-nashville",
    image: heroImage,
    location: "Nashville, Tennessee",
    locationShort: "Nashville, TN",
    badge: "Superhost",
    tag: "Claims Recovery",
    propertiesLabel: "33 properties",

    cardTitle: "11 → 33 properties",
    cardRating: "",
    cardQuote:
      "These guys are gurus of claims. Every chat and claim is so hyper-personalized.",
    cardMetrics: [
      { label: "Claims win rate", value: "85% avg" },
      { label: "Monthly recovery", value: "~$10K" },
      { label: "Portfolio growth", value: "11 → 33" },
    ],

    detailTitle:
      "How Hyper-Personalized Claims Handling Recovered Lost Revenue",
    detailSubtitle:
      "We helped a growing host win claims consistently, recover roughly $10K per month, and scale from 11 to 33 listings.",
    heroStats: [
      { label: "Properties", value: "11 → 33" },
      { label: "Claims Win Rate", value: "85% avg" },
      { label: "Monthly Recovery", value: "~$10K" },
      { label: "Timeline", value: "6 months" },
    ],
    fullQuote:
      "These guys are gurus of claims. Every chat and claim is so hyper-personalized, and the recovery has been a game changer for our bottom line.",
    quoteAuthor: "STR Host, Nashville TN",
    challenge: [
      "The host was losing significant revenue to damages, cancellations, and disputes that were never properly claimed. Submissions were inconsistent, poorly documented, and often rejected.",
      "With a growing portfolio, there was no structured process to track, submit, and win claims at scale.",
    ],
    approach: [
      "We built a dedicated, hyper-personalized claims process — every claim backed by thorough documentation, evidence, and tailored guest communication.",
      "Combined with 24/7 monitoring and faster resolution workflows, this turned claims from an afterthought into a reliable recovery channel.",
    ],
    builtHeading: "What We Implemented",
    built: [
      "24/7 claims monitoring",
      "Hyper-personalized claim submissions",
      "Evidence & documentation system",
      "Guest communication scripts",
      "Damage prevention protocols",
      "Faster resolution workflows",
      "Revenue recovery tracking",
      "Scaling ops support (11 → 33 listings)",
    ],
    widgetTitle: "Claims Recovered",
    widgetItems: [
      { emoji: "🛠️", title: "Damage Claim", subtitle: "Approved", value: "$2,400" },
      { emoji: "📅", title: "Cancellation", subtitle: "Recovered", value: "$1,850" },
      { emoji: "⚖️", title: "Refund Dispute", subtitle: "Won", value: "$980" },
    ],
    widgetFooter: "~$10K recovered this month",
    outcomes: [
      { label: "Claims Win Rate", value: "85% average", highlight: true },
      { label: "Monthly Recovery", value: "~$10K recovered" },
      { label: "Portfolio Growth", value: "11 → 33 listings" },
      { label: "Response Time", value: "<5 min" },
      { label: "Timeline", value: "6 months" },
      { label: "Host Status", value: "Superhost" },
    ],
  },
  {
    slug: "ops-takeover-multi-market",
    image: heroImage,
    location: "Multi-Market",
    locationShort: "Multi-Market",
    badge: "Scaling Fast",
    tag: "Ops Takeover",
    propertiesLabel: "55 properties",

    cardTitle: "11 → 55 properties",
    cardRating: "",
    cardQuote:
      "The team took over operations so I could focus on adding more listings.",
    cardMetrics: [
      { label: "Portfolio growth", value: "11 → 55" },
      { label: "Team expense", value: "↓ Major decrease" },
      { label: "Owner role", value: "Growth only" },
    ],

    detailTitle: "How a Full Ops Takeover Unlocked 5x Portfolio Growth",
    detailSubtitle:
      "We took over end-to-end operations across multiple markets so the owner could focus purely on acquisition — scaling from 11 to 55 listings.",
    heroStats: [
      { label: "Properties", value: "11 → 55" },
      { label: "Team Expense", value: "↓ Major" },
      { label: "Owner Role", value: "Growth only" },
      { label: "Timeline", value: "9 months" },
    ],
    fullQuote:
      "The team took over operations so I could focus on adding more listings. We went from constant firefighting to a smooth, scalable machine.",
    quoteAuthor: "Portfolio Owner, Multi-Market",
    challenge: [
      "The owner was buried in day-to-day operations across several markets — guest messaging, cleaning coordination, pricing, and issue resolution. Growth had stalled because there was no time left to acquire new listings.",
      "In-house staffing costs were climbing while service consistency across markets kept slipping.",
    ],
    approach: [
      "We executed a full operations takeover with a single centralized system covering guest communication, turnovers, dynamic pricing, and reporting across every market.",
      "With operations handled 24/7 by our team, the owner was freed to do one thing: grow the portfolio.",
    ],
    builtHeading: "What We Implemented",
    built: [
      "Full operations takeover",
      "24/7 guest communication",
      "Automated cleaning & turnovers",
      "Dynamic pricing management",
      "Centralized multi-market dashboard",
      "Standardized onboarding playbook",
      "Performance reporting",
      "Scaling ops support (11 → 55 listings)",
    ],
    widgetTitle: "Operations Handled",
    widgetItems: [
      { emoji: "💬", title: "Guest Messaging", subtitle: "24/7", value: "Auto" },
      { emoji: "🧹", title: "Cleaning Turnovers", subtitle: "Scheduled", value: "On-time" },
      { emoji: "📈", title: "Pricing Updates", subtitle: "Daily", value: "Optimized" },
    ],
    widgetFooter: "44 new listings onboarded",
    outcomes: [
      { label: "Portfolio Growth", value: "11 → 55 listings", highlight: true },
      { label: "Team Expense", value: "Major decrease" },
      { label: "Owner Role", value: "Growth only" },
      { label: "Response Time", value: "<5 min" },
      { label: "Timeline", value: "9 months" },
      { label: "Ops Coverage", value: "24/7" },
    ],
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);
