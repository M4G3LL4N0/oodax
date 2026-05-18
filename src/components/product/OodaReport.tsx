import Card from "@/components/ui/Card";
import type { OodaReport } from "@/lib/ooda";
import ScoreCard from "@/components/product/ScoreCard";

type OodaReportProps = {
  report: OodaReport;
};

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="h-full">
      <p className="tactical-text">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </Card>
  );
}

export default function OodaReportView({ report }: OodaReportProps) {
  return (
    <div className="space-y-4">
      <ScoreCard report={report} />
      <div className="grid gap-4 lg:grid-cols-2">
        <ListBlock title="Observe" items={report.observe} />
        <ListBlock title="Orient" items={report.orient} />
      </div>
      <Card>
        <p className="tactical-text">Decide</p>
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {report.decide.map((option) => (
            <div key={option.title} className="rounded-xl border border-slate-700/60 bg-slate-900/60 p-4">
              <p className="font-medium text-slate-100">{option.title}</p>
              <p className="mt-2 text-sm text-slate-300">Upside: {option.upside}</p>
              <p className="mt-1 text-sm text-slate-300">Downside: {option.downside}</p>
              <p className="mt-1 text-sm text-slate-300">Risk: {option.risk}</p>
              <p className="mt-1 text-sm text-cyan-200">Speed required: {option.speedRequired}</p>
            </div>
          ))}
        </div>
      </Card>
      <ListBlock title="Act" items={report.act} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <p className="tactical-text">Best Immediate Move</p>
          <p className="mt-4 text-sm text-slate-200">{report.bestImmediateMove}</p>
          <p className="mt-4 text-xs text-rose-200">Red Team Risk: {report.redTeamRisk}</p>
        </Card>
        <Card>
          <p className="tactical-text">Execution Horizon</p>
          <p className="mt-3 text-sm font-medium text-slate-100">Next 24 Hours</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            {report.next24Hours.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm font-medium text-slate-100">Next 7 Days</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            {report.next7Days.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
