import CTA from "@/components/site/CTA";
import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { TrustStrip } from "@/components/TrustStrip";
import Hero from "@/components/site/Hero";
import Pricing from "@/components/site/Pricing";
import Section from "@/components/site/Section";
import Card from "@/components/ui/Card";

const useCases = [
  "Startup strategy",
  "Competitive response",
  "Crisis response",
  "Sales calls",
  "Product decisions",
  "Market shifts",
  "Founder operating rhythm",
  "Team war rooms",
];

export default function HomePage() {
  return (
    <main>
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

      <Hero />

      <Section
        kicker="Problem"
        title="Most teams do not lose because they lack information. They lose because they react too slowly."
      />

      <Section
        kicker="Solution"
        title="OODAX transforms uncertainty into decision velocity."
      />

      <Section
        kicker="How it works"
        title="Observe, Orient, Decide, Act."
        description="Observe: detect signals. Orient: understand leverage. Decide: choose the highest-advantage move. Act: execute before momentum fades."
      />

      <Section kicker="Product demo preview" title="Command-center OODA panels">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Observe", "Orient", "Decide", "Act"].map((phase) => (
            <Card key={phase} className="lift min-h-40">
              <p className="tactical-text">{phase}</p>
              <p className="mt-3 text-sm text-slate-300">
                Structured outputs focused on signal quality, leverage, ranked options, and execution rhythm.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section kicker="Use cases" title="Built for operators who move fast.">
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <Card key={item} className="lift p-4 text-sm text-slate-200">
              {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        kicker="Why now"
        title="AI increases the speed of markets. The winners are the people and teams who can adapt faster."
      />

      <Section kicker="Pricing preview" title="Free, Pro, Team, Enterprise">
        <Pricing />
      </Section>

      <CTA />
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6"><HeroProductPanel /></section>
      <ProcessFlowSection />
    <MarketingGraphicsStack />
    </main>
  );
}
