import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass rounded-3xl border border-cyan-400/25 p-8 text-center sm:p-10">
        <p className="tactical-text text-cyan-200">Final CTA</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
          Paste the situation. Get the next move.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Most teams do not lose because they are wrong. They lose because they are late.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/demo">Run a loop</Button>
          <Button href="/pricing" variant="secondary">
            See pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
