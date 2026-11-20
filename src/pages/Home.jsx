import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    icon: "✦",
    number: "01",
    title: "Web Design",
    description:
      "Clean, modern and user-friendly website experiences for your brand.",
  },
  {
    icon: "⌘",
    number: "02",
    title: "Development",
    description:
      "Responsive websites built with reliable and maintainable technology.",
  },
  {
    icon: "◈",
    number: "03",
    title: "Brand Identity",
    description:
      "A consistent visual identity that makes your business memorable.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="section-container relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-300">
              Creative studio · Chattogram
            </p>
            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              We build ideas into{" "}
              <span className="text-indigo-400">Digital</span> experiences.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              We help ambitious businesses grow with thoughtful design, smart
              technology and meaningful digital experiences.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/services" className="primary-button">
                Explore Services
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Discover Us
              </Link>
            </div>
            <div className="mt-14 flex gap-10 border-t border-white/15 pt-7">
              <div>
                <p className="text-3xl font-black text-yellow-300">40+</p>
                <p className="mt-1 text-xs text-slate-400">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-yellow-300">25+</p>
                <p className="mt-1 text-xs text-slate-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-black text-yellow-300">★★★★★</p>
                <p className="mt-1 text-xs text-slate-400">Client Rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Modern creative studio workspace"
              className="h-[360px] w-full rounded-3xl object-cover shadow-2xl sm:h-[480px]"
            />
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-soft sm:-left-8">
              <p className="text-xs font-semibold text-slate-500">
                Ideas become impact
              </p>
              <p className="mt-1 text-lg font-black text-slate-900">
                Let's create together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <SectionHeading
          eyebrow="What we do"
          title="Creative solutions for growing brands"
          description="From the first idea to the final launch, we bring strategy, creativity and technology together."
          center
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="outline-button">
            View all services →
          </Link>
        </div>
      </section>

      <section className="bg-brand-50">
        <div className="section-container flex flex-col items-start justify-between gap-7 py-16 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Have a project in mind?
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Let's make something great.
            </h2>
          </div>
          <Link to="/contact" className="primary-button">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;