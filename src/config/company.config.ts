// ============================================================
//  COMPANY CONFIG — edit this file to customize the website
//  for a new plumbing business. Nothing else needs to change.
// ============================================================

export const company = {

  // ── Basic Info ────────────────────────────────────────────
  name: "Zuniga's Plumbing, Inc.",
  shortName: "Zuniga's Plumbing",        // Used in shorter contexts
  founderName: "Walter Zuniga",
  yearsInBusiness: 50,                   // Numeric — drives the counter animation
  city: "Chicago",                       // Primary city name used in headings/copy

  // ── Contact ───────────────────────────────────────────────
  phone: "(773) 619-2730",               // Display format
  phoneRaw: "7736192730",                // For tel: links — digits only, no formatting
  email: "zunigaplumbing@yahoo.com",
  address: {
    street: "7253 S. Green St",
    city: "Chicago",
    state: "IL",
    zip: "60621",
    full: "7253 S. Green St, Chicago, IL 60621",
    mapsQuery: "7253+S.+Green+St,+Chicago,+IL+60621",  // URL-encoded for Google Maps embed
  },
  hours: "Mon–Fri: 8:00 AM – 5:00 PM",

  // ── Colors (optional — leave as-is to keep navy + orange) ─
  // Values are HSL: "hue saturation% lightness%"
  colors: {
    primary: "217 62% 26%",    // Navy blue
    primaryDark: "220 68% 17%", // Darker navy for footer
    accent: "24 86% 41%",      // Orange
  },

  // ── SEO / Meta Tags ───────────────────────────────────────
  meta: {
    title: "Zuniga's Plumbing, Inc. | Professional Chicago Plumbers",
    description:
      "Expert plumbing, water, and sewer contractor services in Chicago. Serving the community for over 50 years with trusted, professional care.",
  },

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    headline: "Chicago's Trusted Plumbers — Over 50 Years of Reliable Service",
    subtext:
      "Licensed, Bonded & Insured. Serving Residential, Commercial & Industrial Clients Across Chicago and Suburbs.",
    badges: [
      "Licensed & Insured",
      "50+ Years Experience",
      "Residential & Commercial",
      "Free Estimates",
    ],
  },

  // ── About / Why Choose Us ─────────────────────────────────
  about: {
    heading: "Why Chicago Trusts Zuniga's Plumbing",
    paragraph1:
      "Founded and led by Walter Zuniga, Zuniga's Plumbing Inc. has been serving Chicago homeowners, businesses, and industrial clients for over 50 years. We're not a call center — we're your neighbors.",
    paragraph2:
      "Whether it's a kitchen remodel, a burst pipe at 2am, or a full commercial sewer line replacement, our licensed team shows up on time, explains every step, and delivers work that passes city inspection the first time.",
    paragraph3:
      "We serve the entire Chicago area and surrounding suburbs — residential, commercial, industrial, and high-rise properties.",
    credentials: ["BBB Accredited", "Yelp Verified", "Angi Certified"],
  },

  // ── Trust Strip (scrolling badges under the hero) ─────────
  trustBadges: [
    { label: "Google Rated",    sublabel: "4.8 ★ · 90+ Reviews",     platform: "google" },
    { label: "BBB Accredited",  sublabel: "A+ Rating",                platform: "bbb"    },
    { label: "Angi Certified",  sublabel: "Super Service Award",      platform: "angi"   },
    { label: "24/7 Emergency",  sublabel: "We Respond Fast",          platform: "phone"  },
    { label: "Yelp Verified",   sublabel: "4.5 ★ · 60+ Reviews",     platform: "yelp"   },
  ],

  // ── Reviews / Testimonials ────────────────────────────────
  reviews: [
    {
      text: "Walter and his team were amazing for our kitchen remodel. They handled everything from planning to code compliance flawlessly. Best plumbers I've worked with!",
      source: "Verified Customer, Angi",
    },
    {
      text: "Walter came out to check a potential issue I had and he was prompt, patient and extremely knowledgeable. Highly recommend for any plumbing needs.",
      source: "Verified Yelp Review",
    },
    {
      text: "Sal, Jamie and Juan did a terrific job repairing three broken pipes and installing a new toilet. Super professional and efficient team.",
      source: "Verified Yelp Review",
    },
    {
      text: "Walter values customer satisfaction higher than any contractor I have worked with. He stayed on-site to ensure everything went perfectly. A true professional.",
      source: "Verified Customer, Angi",
    },
    {
      text: "Zuniga's Plumbing will always get my business. They arrived right on time and were very professional during the entire repair process.",
      source: "BBB Review",
    },
    {
      text: "They showed up on time and did the work quickly. Explained what was going on and showed me the results before finishing. Very transparent service.",
      source: "Verified Customer, Angi",
    },
  ],

  // ── Service Areas ─────────────────────────────────────────
  serviceArea: {
    heading: "Serving Chicago & Surrounding Suburbs",
    subtext:
      "From the heart of Chicago to Cook County suburbs — we're your local, licensed plumbing experts.",
    areas: [
      "Chicago (all neighborhoods)",
      "Bridgeport, Pilsen, Back of the Yards",
      "South Shore, Hyde Park, Englewood",
      "Oak Lawn, Evergreen Park",
      "Cicero, Berwyn",
      "Calumet City, Harvey, Dolton",
      "Blue Island",
      "Suburbs throughout Cook County",
    ],
  },

  // ── Footer tagline ────────────────────────────────────────
  footerTagline: "Chicago's Trusted Plumbing Experts — Serving the City for Over 50 Years",

};
