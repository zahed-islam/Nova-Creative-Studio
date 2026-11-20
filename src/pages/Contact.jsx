import { useState } from "react";
import SectionHeading from "../components/SectionHeading";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
    setForm(initialForm);
  };

  return (
    <section className="section-container section-padding">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="Contact us" title="Let's talk about your next idea" description="Have a question or a project in mind? Send us a message using the form." />
          <div className="mt-9 space-y-6">
            <div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</p><p className="mt-2 font-semibold text-slate-800">hello@novastudio.com</p></div>
            <div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</p><p className="mt-2 font-semibold text-slate-800">Chattogram, Bangladesh</p></div>
            <div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Working hours</p><p className="mt-2 font-semibold text-slate-800">Saturday – Thursday, 9 AM – 6 PM</p></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-9">
          {success && <div role="status" className="mb-6 rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">Thank you! Your message has been submitted.</div>}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-700">Your Name
              <input required name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="form-input mt-2" />
            </label>
            <label className="text-sm font-semibold text-slate-700">Email Address
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input mt-2" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-slate-700">Subject
            <input required name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" className="form-input mt-2" />
          </label>
          <label className="mt-5 block text-sm font-semibold text-slate-700">Message
            <textarea required rows="5" name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." className="form-input mt-2 resize-y" />
          </label>
          <button type="submit" className="primary-button mt-6 w-full sm:w-auto">Send Message</button>
        </form>
      </div>
    </section>
  );
}