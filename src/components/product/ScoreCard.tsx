import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import type { OodaReport } from "@/lib/ooda";

type ScoreCardProps = {
  report: OodaReport;
};

export default function ScoreCard({ report }: ScoreCardProps) {
  const threatTone =
    report.threatLevel === "Critical"
      ? "danger"
      : report.threatLevel === "High"
        ? "warning"
        : report.threatLevel === "Medium"
          ? "default"
          : "success";

  return (
    <Card>
      <p className="tactical-text">Command Metrics</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">Speed Score</p>
          <p className="mt-2 text-3xl font-semibold text-cyan-200">{report.speedScore}</p>
        </div>
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">Threat Level</p>
          <div className="mt-2">
            <Badge label={report.threatLevel} tone={threatTone} />
          </div>
        </div>
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
          <p className="text-xs text-slate-400">Momentum Index</p>
          <p className="mt-2 text-base font-medium text-slate-100">{report.momentumIndex}</p>
        </div>
      </div>
    </Card>
  );
}
