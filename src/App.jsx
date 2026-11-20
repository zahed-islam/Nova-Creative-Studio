import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => setShowWelcome(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      {showWelcome && (
        <div
          role="status"
          className="fixed right-4 top-20 z-50 max-w-sm rounded-xl bg-brand-600 px-5 py-3 text-sm font-medium text-white shadow-xl"
        >
          Welcome to Nova Creative Studio! We are glad you are here.
          <button
            onClick={() => setShowWelcome(false)}
            className="ml-3 font-bold"
            aria-label="Close welcome message"
          >
            ×
          </button>
        </div>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <section className="section-container py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-600">404 Error</p>
      <h1 className="mt-3 text-4xl font-black">Page not found</h1>
      <p className="mt-4 text-slate-500">The page you are looking for does not exist.</p>
    </section>
  );
}