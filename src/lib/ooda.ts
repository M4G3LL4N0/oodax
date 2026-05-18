export type ScenarioType =
  | "Startup"
  | "Competitor move"
  | "Crisis"
  | "Sales"
  | "Product"
  | "Market shift"
  | "Personal decision"
  | "Operations";

export type UrgencyLevel = "Low" | "Medium" | "High" | "Critical";

export type DecisionOption = {
  title: string;
  upside: string;
  downside: string;
  risk: string;
  speedRequired: string;
};

export type OodaReport = {
  observe: string[];
  orient: string[];
  decide: DecisionOption[];
  act: string[];
  speedScore: number;
  threatLevel: UrgencyLevel;
  momentumIndex: "Losing ground" | "Stable" | "Building advantage" | "Breakout window";
  bestImmediateMove: string;
  redTeamRisk: string;
  next24Hours: string[];
  next7Days: string[];
};

const riskKeywords = [
  "delay",
  "churn",
  "outage",
  "legal",
  "burn",
  "drop",
  "blocked",
  "incident",
  "crisis",
  "risk",
  "deadline",
];
const opportunityKeywords = [
  "launch",
  "partnership",
  "expansion",
  "growth",
  "upside",
  "deal",
  "win",
  "new",
  "hiring",
  "demand",
];
const competitorKeywords = [
  "competitor",
  "rival",
  "pricing",
  "market share",
  "copy",
  "feature parity",
  "incumbent",
];
const timingKeywords = [
  "today",
  "this week",
  "48 hours",
  "tomorrow",
  "quarter",
  "urgent",
  "immediately",
  "deadline",
];

const scenarioWeight: Record<ScenarioType, number> = {
  Startup: 10,
  "Competitor move": 15,
  Crisis: 20,
  Sales: 8,
  Product: 11,
  "Market shift": 14,
  "Personal decision": 6,
  Operations: 9,
};

const urgencyWeight: Record<UrgencyLevel, number> = {
  Low: 8,
  Medium: 18,
  High: 30,
  Critical: 42,
};

type SituationAnalysis = {
  riskHits: number;
  opportunityHits: number;
  competitorHits: number;
  timingHits: number;
  detailDepth: number;
  actorSignal: number;
};

export function analyzeSituation(situation: string): SituationAnalysis {
  const text = situation.toLowerCase();
  const words = text.split(/\s+/).filter(Boolean);
  const detailDepth = Math.min(25, Math.floor(words.length / 10));
  const actorSignal = (text.match(/\b(team|customer|investor|founder|board|market|sales|ops)\b/g) ?? []).length;

  return {
    riskHits: countMatches(text, riskKeywords),
    opportunityHits: countMatches(text, opportunityKeywords),
    competitorHits: countMatches(text, competitorKeywords),
    timingHits: countMatches(text, timingKeywords),
    detailDepth,
    actorSignal: Math.min(actorSignal, 8),
  };
}

export function calculateSpeedScore(
  scenario: ScenarioType,
  urgency: UrgencyLevel,
  analysis: SituationAnalysis,
): number {
  const baseline = scenarioWeight[scenario] + urgencyWeight[urgency];
  const signalBonus = analysis.detailDepth + analysis.actorSignal + analysis.timingHits * 4;
  const pressure = analysis.riskHits * 3 + analysis.competitorHits * 4;
  const opportunityLift = analysis.opportunityHits * 2;

  return clamp(Math.round(baseline + signalBonus + pressure + opportunityLift), 0, 100);
}

export function detectThreatLevel(score: number, analysis: SituationAnalysis): UrgencyLevel {
  const threatRaw = score + analysis.riskHits * 5 + analysis.competitorHits * 4 - analysis.opportunityHits * 2;

  if (threatRaw >= 82) return "Critical";
  if (threatRaw >= 62) return "High";
  if (threatRaw >= 40) return "Medium";
  return "Low";
}

export function detectMomentumIndex(
  speedScore: number,
  analysis: SituationAnalysis,
): OodaReport["momentumIndex"] {
  const momentumRaw = speedScore + analysis.opportunityHits * 4 - analysis.riskHits * 3;
  if (momentumRaw < 35) return "Losing ground";
  if (momentumRaw < 55) return "Stable";
  if (momentumRaw < 78) return "Building advantage";
  return "Breakout window";
}

export function generateObserveSignals(
  scenario: ScenarioType,
  urgency: UrgencyLevel,
  analysis: SituationAnalysis,
): string[] {
  return [
    `${analysis.riskHits + analysis.opportunityHits + analysis.competitorHits + analysis.timingHits} high-value signals detected in the brief.`,
    `${analysis.actorSignal || 1} core actor groups identified; map incentives before moving.`,
    `${urgency} urgency plus ${scenario.toLowerCase()} context creates compressed response windows.`,
    "Unknowns to validate: second-order effects, dependency constraints, and reversal triggers.",
  ];
}

export function generateOrientation(
  scenario: ScenarioType,
  analysis: SituationAnalysis,
  threat: UrgencyLevel,
): string[] {
  return [
    `Strategic read: this is primarily a ${scenario.toLowerCase()} tempo battle where timing beats completeness.`,
    `Leverage point: prioritize one asymmetric move that shifts narrative or economics within 24 hours.`,
    `Hidden risk: threat profile is ${threat.toLowerCase()} with ${analysis.competitorHits} competitor pressure signals and ${analysis.riskHits} downside flags.`,
    "Timing implication: delay increases coordination cost and reduces optionality for the next loop.",
  ];
}

export function generateDecisionOptions(
  scenario: ScenarioType,
  urgency: UrgencyLevel,
  threat: UrgencyLevel,
): DecisionOption[] {
  return [
    {
      title: "Option 1: Fast defensive move",
      upside: "Buys time, protects downside, and stabilizes stakeholder confidence.",
      downside: "May concede initiative if competitor momentum is already rising.",
      risk: `${threat} threat environment can make this look reactive.`,
      speedRequired: urgency === "Critical" ? "Within 2 hours" : "Within same business day",
    },
    {
      title: "Option 2: Offensive asymmetric move",
      upside: `Can reset the field by reframing the ${scenario.toLowerCase()} narrative.`,
      downside: "Requires clear owner and rapid alignment to avoid execution drag.",
      risk: "Higher variance if assumptions are wrong.",
      speedRequired: urgency === "Low" ? "Within 48 hours" : "Within 12 hours",
    },
    {
      title: "Option 3: Wait and gather more signal",
      upside: "Improves confidence and reduces false positives.",
      downside: "Burns tempo and can miss breakout timing.",
      risk: "Opportunity cost compounds if market moves first.",
      speedRequired: "Strictly time-boxed to 6-24 hours",
    },
  ];
}

export function generateActionPlan(
  analysis: SituationAnalysis,
  momentum: OodaReport["momentumIndex"],
): string[] {
  return [
    "Next 30 minutes: assign commander, clarify objective, and align a single source of truth.",
    `Next 24 hours: execute one high-leverage move and monitor ${analysis.timingHits + 2} leading indicators.`,
    `Next 7 days: run daily loop reviews until momentum moves from "${momentum}" to "Building advantage" or better.`,
    "Monitor: response speed, conversion of decisions to shipped actions, and risk drift.",
    "Invalidate plan if assumptions break, execution stalls for >24h, or new critical intelligence appears.",
  ];
}

export function generateRedTeamRisk(
  analysis: SituationAnalysis,
  threat: UrgencyLevel,
): string {
  if (threat === "Critical") {
    return "Red team view: your biggest failure mode is waiting for perfect data while adversarial momentum compounds.";
  }
  if (analysis.opportunityHits > analysis.riskHits) {
    return "Red team view: overconfidence risk is rising; validate that demand signals are real and repeatable.";
  }
  return "Red team view: coordination drag and mixed ownership are likely to dilute speed advantage.";
}

export function generateOodaReport(
  situation: string,
  scenario: ScenarioType,
  urgency: UrgencyLevel,
): OodaReport {
  const analysis = analyzeSituation(situation);
  const speedScore = calculateSpeedScore(scenario, urgency, analysis);
  const threatLevel = detectThreatLevel(speedScore, analysis);
  const momentumIndex = detectMomentumIndex(speedScore, analysis);

  return {
    observe: generateObserveSignals(scenario, urgency, analysis),
    orient: generateOrientation(scenario, analysis, threatLevel),
    decide: generateDecisionOptions(scenario, urgency, threatLevel),
    act: generateActionPlan(analysis, momentumIndex),
    speedScore,
    threatLevel,
    momentumIndex,
    bestImmediateMove:
      threatLevel === "Critical"
        ? "Launch a same-day defensive + narrative response and assign one accountable owner."
        : "Run an offensive asymmetric move in the next 12 hours while instrumenting key signals.",
    redTeamRisk: generateRedTeamRisk(analysis, threatLevel),
    next24Hours: [
      "Ship one concrete move with owner, metric, and deadline.",
      "Brief stakeholders with a single-page loop summary.",
      "Run a fast red-team challenge before next execution cycle.",
    ],
    next7Days: [
      "Re-run the loop daily with updated evidence.",
      "Track speed score trend and threat shifts by scenario.",
      "Archive learnings into repeatable response playbooks.",
    ],
  };
}

function countMatches(text: string, keywords: string[]): number {
  return keywords.reduce((sum, keyword) => sum + (text.includes(keyword) ? 1 : 0), 0);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
