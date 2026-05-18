import Pricing from "@/components/site/Pricing";
import { SubpageVisual } from "@/components/SubpageVisual";
import CTA from "@/components/site/CTA";

export default function PricingPage() {
  return (
    <main>
      <SubpageVisual variant="pricing" />
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="tactical-text text-cyan-200">Pricing</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
          Plans for operators, teams, and enterprises
        </h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Start free, move to Pro for unlimited loops, and scale to team war rooms and enterprise
          intelligence operations.
        </p>
        <Pricing />
      </section>
      <CTA />
    </main>
  );
}
