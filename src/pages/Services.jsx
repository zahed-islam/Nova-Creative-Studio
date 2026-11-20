import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const services = [
  { icon: "✦", number: "01", title: "Web Design", description: "Modern layouts, thoughtful user journeys and engaging visual design for every screen." },
  { icon: "⌘", number: "02", title: "Web Development", description: "Responsive and accessible frontend experiences built with modern web technologies." },
  { icon: "◈", number: "03", title: "Brand Identity", description: "Logo direction, color systems and visual guidelines that help your brand stand out." },
  { icon: "▧", number: "04", title: "UI/UX Design", description: "Research-led interfaces that make digital products simple and enjoyable to use." },
  { icon: "◎", number: "05", title: "Content Creation", description: "Clear and consistent visual content to tell your brand story." },
  { icon: "↗", number: "06", title: "Digital Strategy", description: "Practical ideas and direction to help your business grow online." },
];

export default function Services() {
  return (
    <section className="section-container section-padding">
      <SectionHeading eyebrow="Our services" title="Everything you need to grow online" description="A flexible set of creative and digital services, designed around your goals." center />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.number} {...service} />)}
      </div>
    </section>
  );
}