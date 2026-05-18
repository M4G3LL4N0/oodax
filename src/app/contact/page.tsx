import Card from "@/components/ui/Card";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <SubpageVisual variant="contact" />
      <p className="tactical-text text-cyan-200">Contact</p>
      <h1 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
        Tell us your operating environment
      </h1>
      <p className="mt-3 text-slate-300">
        Share your use case and we will follow up with a war-room onboarding path.
      </p>
      <Card className="mt-8">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm text-slate-200">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="team-size" className="text-sm text-slate-200">
              Team size
            </label>
            <input
              id="team-size"
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="use-case" className="text-sm text-slate-200">
              Use case
            </label>
            <input
              id="use-case"
              type="text"
              className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-2 w-full rounded-xl border border-slate-700/70 bg-slate-900/70 p-3 text-sm text-slate-100"
            />
          </div>
          <button
            type="button"
            className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Send interest
          </button>
        </form>
      </Card>
    </main>
  );
}
