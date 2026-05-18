type SectionProps = {
  kicker: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Section({ kicker, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="tactical-text text-cyan-200">{kicker}</p>
      <h2 className="mt-2 max-w-3xl text-2xl font-semibold text-slate-100 sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-3xl text-slate-300">{description}</p> : null}
      {children}
    </section>
  );
}
