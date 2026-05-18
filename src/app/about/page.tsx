import Card from "@/components/ui/Card";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SubpageVisual variant="about" />
      <p className="tactical-text text-cyan-200">Company Thesis</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
        OODAX exists to compress time-to-action.
      </h1>
      <p className="mt-4 max-w-4xl text-slate-300">
        Information is no longer the advantage. Orientation speed is the advantage. OODAX helps
        people and teams compress the time between reality changing and action happening.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Card>
          <p className="tactical-text">Observe</p>
          <p className="mt-3 text-sm text-slate-300">
            Detect signal early and separate noise from reality.
          </p>
        </Card>
        <Card>
          <p className="tactical-text">Orient</p>
          <p className="mt-3 text-sm text-slate-300">
            Map incentives, leverage, threats, and timing windows.
          </p>
        </Card>
        <Card>
          <p className="tactical-text">Decide + Act</p>
          <p className="mt-3 text-sm text-slate-300">
            Choose the highest-advantage move and execute before momentum fades.
          </p>
        </Card>
      </div>
    </main>
  );
}
