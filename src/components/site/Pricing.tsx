import Card from "@/components/ui/Card";
import { pricingTiers } from "@/lib/data";

export default function Pricing() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {pricingTiers.map((tier) => (
        <Card key={tier.name} className="lift">
          <p className="text-lg font-semibold text-slate-100">{tier.name}</p>
          <p className="mt-2 text-2xl font-semibold text-cyan-200">
            {tier.price}
            <span className="ml-1 text-sm font-normal text-slate-400">/{tier.frequency}</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {tier.features.map((feature) => (
              <li key={feature}>- {feature}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
