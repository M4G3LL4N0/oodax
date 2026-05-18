import type { ScenarioType } from "@/lib/ooda";

export const scenarioTypes: ScenarioType[] = [
  "Startup",
  "Competitor move",
  "Crisis",
  "Sales",
  "Product",
  "Market shift",
  "Personal decision",
  "Operations",
];

export const urgencyLevels = ["Low", "Medium", "High", "Critical"] as const;

export const dashboardScenarios = [
  {
    name: "Competitor lowered pricing",
    urgency: "High",
    speedScore: 84,
    threatLevel: "High",
    phase: "Orient",
    nextAction: "Ship a differentiated offer before next buying cycle.",
  },
  {
    name: "Growth channel stalled",
    urgency: "Medium",
    speedScore: 62,
    threatLevel: "Medium",
    phase: "Observe",
    nextAction: "Instrument signal quality and test two channel variants.",
  },
  {
    name: "Investor meeting in 48 hours",
    urgency: "Critical",
    speedScore: 91,
    threatLevel: "Critical",
    phase: "Decide",
    nextAction: "Align narrative, metrics, and next 90-day action map.",
  },
  {
    name: "Product launch delayed",
    urgency: "High",
    speedScore: 77,
    threatLevel: "High",
    phase: "Act",
    nextAction: "Trigger delay containment plan and protect customer trust.",
  },
  {
    name: "Market narrative shifting",
    urgency: "Medium",
    speedScore: 69,
    threatLevel: "Medium",
    phase: "Orient",
    nextAction: "Reposition messaging around strongest wedge insight.",
  },
];

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    frequency: "forever",
    features: ["5 OODA loops/month", "Basic reports", "Personal use"],
  },
  {
    name: "Pro",
    price: "$29",
    frequency: "month",
    features: [
      "Unlimited loops",
      "Speed score",
      "Red team analysis",
      "Saved reports",
    ],
  },
  {
    name: "Team",
    price: "$149",
    frequency: "month",
    features: [
      "Team war rooms",
      "Shared loops",
      "Dashboard",
      "Scenario history",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    frequency: "deployment",
    features: [
      "Live intelligence feeds",
      "Compliance controls",
      "Private deployments",
      "API access",
    ],
  },
];
