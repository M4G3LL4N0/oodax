import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { dashboardScenarios } from "@/lib/data";

export default function DashboardPreview() {
  return (
    <div className="grid gap-4">
      {dashboardScenarios.map((scenario) => (
        <Card key={scenario.name} className="lift">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-slate-100">{scenario.name}</p>
              <p className="mt-1 text-sm text-slate-400">Current phase: {scenario.phase}</p>
              <p className="mt-1 text-sm text-cyan-200">Next action: {scenario.nextAction}</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge label={`Urgency: ${scenario.urgency}`} tone="warning" />
              <Badge label={`Speed: ${scenario.speedScore}`} tone="default" />
              <Badge
                label={scenario.threatLevel}
                tone={scenario.threatLevel === "High" || scenario.threatLevel === "Critical" ? "danger" : "default"}
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
