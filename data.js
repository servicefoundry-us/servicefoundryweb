// All site content lives here. Edit this file to change trades, prices, or stages.
//
// Trade status:
//   "available"   the trade is fully researched; courses can be bought
//   "in-progress" the trade is still being researched; shown, but not for sale
//
// Only trades marked "available" get purchase buttons. Flip a status here
// when the research for a trade is complete.

export const prices = {
  course: 19.99,
  bundle: 34.99,
  allAccess: 99.99,
};

export const services = [
  {
    id: "business_design",
    label: "Business design",
    description: "Planning the business: the offer, the pricing, the operations, and the launch.",
  },
  {
    id: "business_management",
    label: "Business management",
    description: "Running and growing the business: the team, the jobs, the money, and the customers.",
  },
];

export const trades = [
  {
    slug: "landscaping",
    name: "Landscaping",
    category: "Outdoor services",
    status: "in-progress",
    summary: "Build a dependable lawn and landscape service.",
    researchNote: "Our cohort is studying how landscaping businesses win recurring clients, schedule crews, and price seasonal work.",
    courses: [
      { slug: "starting-from-scratch", title: "Starting from Scratch", focus: "Launch decisions" },
      { slug: "management", title: "Management", focus: "Running, improving, and growing the operation" },
    ],
  },
  {
    slug: "auto-detailing",
    name: "Auto detailing",
    category: "Automotive",
    status: "in-progress",
    summary: "Turn quality vehicle care into a profitable service.",
    researchNote: "Our cohort is studying how detailing shops build repeat customers and price packages.",
    courses: [
      { slug: "starting-from-scratch", title: "Starting from Scratch", focus: "Launch decisions" },
      { slug: "management", title: "Management", focus: "Running, improving, and growing the operation" },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter cleaning",
    category: "Property care",
    status: "in-progress",
    summary: "Organize safe jobs, estimates, and repeat customers.",
    researchNote: "Our cohort is studying how gutter businesses handle safety, estimates, and recurring seasonal jobs.",
    courses: [
      { slug: "starting-from-scratch", title: "Starting from Scratch", focus: "Launch decisions" },
      { slug: "management", title: "Management", focus: "Running, improving, and growing the operation" },
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure washing",
    category: "Exterior services",
    status: "in-progress",
    summary: "Build a process-driven exterior cleaning business.",
    researchNote: "Our cohort is studying how pressure washing businesses set up jobs, equipment, and pricing.",
    courses: [
      { slug: "starting-from-scratch", title: "Starting from Scratch", focus: "Launch decisions" },
      { slug: "management", title: "Management", focus: "Running, improving, and growing the operation" },
    ],
  },
];

// The four request stages. Each one has a status in the account and an email.
export const stages = [
  {
    id: "received",
    label: "Received",
    description: "We have your request. Nothing else is needed from you yet.",
  },
  {
    id: "under_review",
    label: "Under review",
    description: "We are reviewing the trade and your background.",
  },
  {
    id: "approved",
    label: "Approved",
    description: "Your trade is approved. Your next steps and the services you can add are in your account.",
  },
  {
    id: "declined",
    label: "Declined",
    description: "We can't take this trade right now. Your account lists the reason and any next steps.",
  },
];

// Sample data shown on the account page until real accounts exist.
export const sampleRequest = {
  trade: "Auto detailing",
  stageId: "under_review",
  services: ["business_design", "business_management"],
  submitted: "November 14, 2026",
  updated: "November 17, 2026",
  feedback: "Thanks for the detail in your request. We're checking how this trade fits our current research.",
  nextSteps: "No action needed right now. We'll update this page when the review is complete.",
};
