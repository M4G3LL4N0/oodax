import OodaEngine from "@/components/product/OodaEngine";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function DemoPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SubpageVisual variant="demo" />
      <p className="tactical-text text-cyan-200">Interactive Product Demo</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
        OODA Loop Generator
      </h1>
      <p className="mt-3 max-w-3xl text-slate-300">
        Paste any situation, select scenario and urgency, then generate a structured Observe,
        Orient, Decide, Act report with ranked options and action windows.
      </p>
      <div className="mt-8">
        <OodaEngine />
      </div>
    </main>
  );
}
