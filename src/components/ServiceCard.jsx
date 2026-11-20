export default function ServiceCard({ icon, title, description, number }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm font-bold text-slate-300">{number}</span>
      </div>
      <h3 className="mt-8 text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
      <span className="mt-6 inline-block text-sm font-bold text-brand-600 transition group-hover:translate-x-1">Explore service →</span>
    </article>
  );
}