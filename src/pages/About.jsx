import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section className="section-container section-padding">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About Nova" title="Small team. Big ideas. Meaningful work." description="Nova is a creative studio focused on helping people and businesses communicate better through design and technology." />
          <p className="mt-5 leading-8 text-slate-500">We believe great digital work starts with listening. We learn about your goals, understand your audience and build a solution that feels right for your brand.</p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div><p className="text-3xl font-black text-brand-600">2020</p><p className="mt-1 text-sm text-slate-500">Year founded</p></div>
            <div><p className="text-3xl font-black text-brand-600">100%</p><p className="mt-1 text-sm text-slate-500">Passion for quality</p></div>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Creative team collaborating" className="h-[420px] w-full rounded-3xl object-cover" />
      </div>
      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[["Our Mission", "Make useful, beautiful digital experiences accessible to growing businesses."], ["Our Vision", "Become a trusted creative partner for brands with ambitious ideas."], ["Our Values", "Stay curious, communicate clearly and care about every detail."]].map(([title, body]) => (
          <div key={title} className="rounded-2xl bg-slate-50 p-7"><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-500">{body}</p></div>
        ))}
      </div>
    </section>
  );
}