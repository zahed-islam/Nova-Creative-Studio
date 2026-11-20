import SectionHeading from "../components/SectionHeading";

const images = [
  { src: "photo-1497366754035-f200968a6e72", title: "Workspace Design", category: "Interior" },
  { src: "photo-1516321318423-f06f85e504b3", title: "Creative Direction", category: "Branding" },
  { src: "photo-1460925895917-afdab827c52f", title: "Digital Product", category: "Web" },
  { src: "photo-1558655146-d09347e92766", title: "Visual Identity", category: "Branding" },
  { src: "photo-1497366216548-37526070297c", title: "Team Collaboration", category: "Workspace" },
  { src: "photo-1559028006-448665bd7c7f", title: "Modern Architecture", category: "Design" },
];

export default function Gallery() {
  return (
    <section className="section-container section-padding">
      <SectionHeading eyebrow="Our gallery" title="A glimpse into our creative world" description="A collection of inspiration, ideas and moments from our work." center />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item, index) => (
          <article key={item.title} className="group overflow-hidden rounded-2xl bg-slate-100">
            <div className="overflow-hidden">
              <img
                src={`https://images.unsplash.com/${item.src}?auto=format&fit=crop&w=900&q=80`}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between p-5">
              <div><h3 className="font-bold text-slate-900">{item.title}</h3><p className="mt-1 text-xs text-slate-500">{item.category}</p></div>
              <span className="text-sm font-bold text-brand-600">0{index + 1}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}