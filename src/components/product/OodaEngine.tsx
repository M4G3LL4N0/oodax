"use client";

import { useMemo, useState } from "react";
import OodaReportView from "@/components/product/OodaReport";
import Card from "@/components/ui/Card";
import { scenarioTypes, urgencyLevels } from "@/lib/data";
import { generateOodaReport, type OodaReport, type ScenarioType, type UrgencyLevel } from "@/lib/ooda";

const starterSituation =
  "Our competitor cut pricing 25%, pipeline velocity dropped, and we have a board update in 48 hours.";

export default function OodaEngine() {
  const [situation, setSituation] = useState(starterSituation);
  const [scenario, setScenario] = useState<ScenarioType>("Competitor move");
  const [urgency, setUrgency] = useState<UrgencyLevel>("High");
  const [report, setReport] = useState<OodaReport | null>(null);

  const canGenerate = useMemo(() => situation.trim().length > 20, [situation]);

  return (
    <div className="space-y-4">
      <Card>
        <p className="tactical-text">OODA Loop Generator</p>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="situation" className="text-sm font-medium text-slate-200">
              Situation
            </label>
            <textarea
              id="situation"
              value={situation}
              onChange={(event) => setSituation(event.target.value)}
              rows={6}
              className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100 outline-none ring-cyan-300/50 focus:ring"
              placeholder="Paste your situation, threat, opportunity, or strategic question..."
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="scenario" className="text-sm font-medium text-slate-200">
                Scenario type
              </label>
              <select
                id="scenario"
                value={scenario}
                onChange={(event) => setScenario(event.target.value as ScenarioType)}
                className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
              >
                {scenarioTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="urgency" className="text-sm font-medium text-slate-200">
                Urgency
              </label>
              <select
                id="urgency"
                value={urgency}
                onChange={(event) => setUrgency(event.target.value as UrgencyLevel)}
                className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
              >
                {urgencyLevels.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="button"
            disabled={!canGenerate}
            onClick={() => setReport(generateOodaReport(situation, scenario, urgency))}
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Generate OODA Loop
          </button>
        </div>
      </Card>

      {report ? (
        <OodaReportView report={report} />
      ) : (
        <Card>
          <p className="text-sm text-slate-300">
            Run the generator to get Observe, Orient, Decide, Act output with speed score,
            threat level, momentum index, and execution windows.
          </p>
        </Card>
      )}
    </div>
  );
}
