import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="radar-ring left-[8%] top-24 h-56 w-56" />
      <div className="radar-ring right-[10%] top-10 h-72 w-72" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="tactical-text text-cyan-200">OODAX: Decision velocity infrastructure</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Win the next move before everyone else sees it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              OODAX turns any messy situation into a structured OODA loop, giving founders,
              operators, and teams a faster way to observe, orient, decide, and act.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/demo">Run a loop</Button>
              <Button href="/dashboard" variant="secondary">
                View command center
              </Button>
            </div>
          </div>
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.18),transparent_45%)]" />
            <div className="relative space-y-4">
              {["Observe", "Orient", "Decide", "Act"].map((phase) => (
                <div
                  key={phase}
                  className="rounded-xl border border-slate-700/70 bg-slate-900/60 px-4 py-3"
                >
                  <p className="tactical-text">{phase}</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Loop phase locked for high-speed execution.
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
