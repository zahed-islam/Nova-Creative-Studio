export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-600">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-500">{description}</p>}
    </div>
  );
}