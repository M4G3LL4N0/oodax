import DashboardPreview from "@/components/product/DashboardPreview";
import { SubpageVisual } from "@/components/SubpageVisual";
import Card from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SubpageVisual variant="dashboard" />
      <p className="tactical-text text-cyan-200">Command Center</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
        Active scenarios and loop velocity
      </h1>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <Card>
          <p className="tactical-text">Global Speed Score</p>
          <p className="mt-2 text-4xl font-semibold text-cyan-200">78</p>
          <p className="mt-2 text-sm text-slate-300">Team loop execution is building advantage.</p>
        </Card>
        <Card>
          <p className="tactical-text">Risk Surface</p>
          <p className="mt-2 text-2xl font-semibold text-amber-200">2 high-threat scenarios</p>
          <p className="mt-2 text-sm text-slate-300">
            Prioritize containment plans before daily strategy review.
          </p>
        </Card>
        <Card>
          <p className="tactical-text">War Room Rhythm</p>
          <p className="mt-2 text-2xl font-semibold text-slate-100">Daily 09:00 + 16:00 loops</p>
          <p className="mt-2 text-sm text-slate-300">
            Re-run loops when new market or competitor signal appears.
          </p>
        </Card>
      </div>
      <div className="mt-8">
        <DashboardPreview />
      </div>
    </main>
  );
}
