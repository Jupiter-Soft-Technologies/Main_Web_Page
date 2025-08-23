import React, { useEffect, useMemo, useRef, useState } from "react";
import ContactForm from "./ContactForm";


// NOTE: This is a single-file React app for a modern startup website.
// Tech used: React (JS), HTML structure, CSS via Tailwind utility classes, JS interactivity.
// Drop this component into your React project (e.g., App.jsx) and ensure Tailwind is enabled.
// All content is tailored for a new company with technical skills and zero client history yet.

// Simple in-file Icon set to avoid external deps
const Icon = ({ name, className = "w-5 h-5" }) => {
  const paths = {
    rocket:
      "M12 2c-1.5 1.4-2.7 3-3.6 4.7-.5 1-.9 2-1.2 3.1-1 .3-2.1.7-3.1 1.2C2.4 11 1 12.3 2 14c.2.4.6.7 1 .8 1.1.3 2.3.6 3.4.8.2 1.2.5 2.3.8 3.4.1.4.4.8.8 1 1.7 1 3-.4 3.1-2 .5-1 1-2 1.2-3.1 1.1-.3 2.1-.7 3.1-1.2C19 11.7 20.6 10.5 22 9c-2.5-.4-5.1-.4-7.6 0C13.9 6.1 13.2 4 12 2zM9 15l-3-.7.7 3L9 15z",
    spark: "M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5L12 2z",
    shield: "M12 2l8 4v6c0 5-3.4 9.6-8 10-4.6-.4-8-5-8-10V6l8-4z",
    code: "M9 18l-6-6 6-6M15 6l6 6-6 6",
    cpu: "M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3M7 7h10v10H7z",
    puzzle: "M7 10a2 2 0 114 0h2a2 2 0 114 0v6H7v-6z",
    clock: "M12 6v6l4 2M12 2a10 10 0 100 20 10 10 0 000-20z",
    users: "M16 14a4 4 0 10-8 0v2h8v-2zM12 6a3 3 0 110 6 3 3 0 010-6z",
    check: "M20 6L9 17l-5-5",
    menu: "M3 6h18M3 12h18M3 18h18",
    close: "M6 6l12 12M6 18L18 6",
    arrow: "M5 12h14M13 5l7 7-7 7",
    mail: "M4 6h16v12H4z M4 6l8 7 8-7",
    phone: "M6 2h4l1 5-2 1a12 12 0 006 6l1-2 5 1v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z",
    timeline: "M3 12h18M6 12v-3m0 3v3M12 12v-5m0 5v5M18 12V7m0 5v5",
    github: "M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 . 1.7 2 . 1.7 1.1 1.9 2.8 1.3 3.5 1 . 7-.8 1.1-1.2 1.3-.9.2-1.9.4-2.9.4-2.2 0-4.3-.7-6.1-2A12 12 0 0112 .5z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d={paths[name] || paths.spark} />
    </svg>
  );
};

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/60 backdrop-blur border-black/10 shadow-sm">
    {children}
  </span>
);

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
  >
    {children}
  </a>
);

const SectionTitle = ({ kicker, title, sub }) => (
  <div className="mb-10 text-center">
    {kicker && (
      <div className="mb-3 flex justify-center">
        <Badge>
          <Icon name="spark" className="w-4 h-4" /> {kicker}
        </Badge>
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    {sub && <p className="mt-3 text-gray-600 max-w-2xl mx-auto">{sub}</p>}
  </div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 text-indigo-600">
      <Icon name={icon} className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600 text-sm">{desc}</p>
  </div>
);

const Step = ({ step, title, desc }) => (
  <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
    <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white text-sm font-bold">
      {step}
    </div>
    <h3 className="pl-8 text-lg font-semibold">{title}</h3>
    <p className="pl-8 mt-2 text-gray-600 text-sm">{desc}</p>
  </div>
);

const Testimonial = ({ quote, name, role }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
    <p className="text-gray-800 italic">“{quote}”</p>
    <div className="mt-4 text-sm text-gray-600">— {name}, {role}</div>
  </div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="font-medium">{q}</span>
        <Icon name={open ? "close" : "arrow"} className={`w-5 h-5 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm">{a}</p>}
    </div>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      className="fixed bottom-6 right-6 rounded-full bg-black text-white p-3 shadow-lg hover:opacity-90"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

// const ContactForm = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(null);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) {
//       setStatus({ type: "error", msg: "Please fill all fields." });
//       return;
//     }
//     // Demo: open mail client
//     const subject = encodeURIComponent("New inquiry – JupitorSoftTechnologies");
//     const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
//     window.location.href = `mailto:hello@jupitorsofttech.com?subject=${subject}&body=${body}`;
//     setStatus({ type: "ok", msg: "Opening your email client…" });
//   };

//   return (
//     <form onSubmit={onSubmit} className="space-y-4">
//       <input
//         className="w-full rounded-xl border border-black/10 p-3 focus:outline-none focus:ring-2 focus:ring-black"
//         placeholder="Your name"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         className="w-full rounded-xl border border-black/10 p-3 focus:outline-none focus:ring-2 focus:ring-black"
//         placeholder="Email address"
//         type="email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <textarea
//         className="w-full rounded-xl border border-black/10 p-3 focus:outline-none focus:ring-2 focus:ring-black min-h-[120px]"
//         placeholder="Tell us about your idea, timeline, and budget (optional)"
//         value={form.message}
//         onChange={(e) => setForm({ ...form, message: e.target.value })}
//       />
//       <button type="submit" className="w-full rounded-xl bg-black text-white py-3 font-semibold hover:opacity-90">Send Inquiry</button>
//       {status && (
//         <div className={`text-sm ${status.type === "error" ? "text-red-600" : "text-gray-700"}`}>{status.msg}</div>
//       )}
//     </form>
//   );
// };

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  const onNav = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={onNav}>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold">JS</div>
          <span className="text-sm font-bold tracking-wide">JupitorSoftTechnologies</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {[
            ["#services", "Services"],
            ["#process", "Process"],
            ["#work", "Our Edge"],
            ["#pricing", "Pricing"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <NavLink key={href} href={href} onClick={onNav}>{label}</NavLink>
          ))}
          <a
            href="#contact"
            onClick={onNav}
            className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Get a Quote
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </Container>
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <Container className="py-2 flex flex-col gap-2">
            {[
              ["#services", "Services"],
              ["#process", "Process"],
              ["#work", "Our Edge"],
              ["#pricing", "Pricing"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <NavLink key={href} href={href} onClick={(e)=>{e.preventDefault(); document.querySelector(href)?.scrollIntoView({behavior:'smooth'}); setOpen(false);}}>
                {label}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); setOpen(false);}}
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white inline-flex w-max"
            >
              Get a Quote
            </a>
          </Container>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <Container className="pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge>
            <Icon name="rocket" className="w-4 h-4" /> New, but battle-ready
          </Badge>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            We build modern web apps for ambitious ideas.
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
            JupitorSoftTechnologies is a fresh team with deep technical skills and startup energy. We haven’t worked with clients yet—so we over-index on responsiveness, craftsmanship, and pricing.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-xl bg-black px-5 py-3 text-white font-semibold" onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}>Start a Project</a>
            <a href="#services" className="rounded-xl border border-black/10 px-5 py-3 font-semibold" onClick={(e)=>{e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>Explore Services</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-600">
            <Badge><Icon name="clock" className="w-4 h-4" /> 1–2 week MVPs</Badge>
            <Badge><Icon name="shield" className="w-4 h-4" /> Quality-first</Badge>
            <Badge><Icon name="users" className="w-4 h-4" /> Direct dev access</Badge>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl border border-black/10 bg-white p-4 shadow-xl">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white"><Icon name="code" /></div>
                <p className="text-sm text-gray-600">Live preview mock UI</p>
                <div className="mt-2 text-xl font-bold">Clean. Fast. Reliable.</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-6 -bottom-6 h-40 w-40 rounded-3xl bg-gradient-to-br from-indigo-200 to-violet-200 blur-2xl opacity-60" />
        </div>
      </Container>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-20">
    <Container>
      <SectionTitle
        kicker="Services"
        title="What we can ship for you"
        sub="We’re a new company with experienced engineers. We focus on small, high-impact projects with fast iterations."
      />
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard icon="code" title="Web Apps & Dashboards" desc="React-based SPAs, admin portals, data dashboards with clean UX and solid performance." />
        <FeatureCard icon="cpu" title="API & Backend" desc="Node/Express services, REST/GraphQL APIs, auth, file storage, and integrations." />
        <FeatureCard icon="puzzle" title="MVP & Prototypes" desc="Click-through prototypes or coded MVPs to validate your idea quickly and affordably." />
        <FeatureCard icon="shield" title="Refactoring & QA" desc="Tidy legacy code, fix performance bottlenecks, add tests, and CI-based quality gates." />
        <FeatureCard icon="timeline" title="Automation" desc="Internal tools, scripts, and workflow automations to save your team hours each week." />
        <FeatureCard icon="users" title="Dedicated Team" desc="Work directly with engineers. No layers. Transparent communication and weekly demos." />
      </div>
    </Container>
  </section>
);

const Process = () => (
  <section id="process" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
    <Container>
      <SectionTitle
        kicker="How we work"
        title="A lightweight, transparent process"
        sub="Designed for speed and clarity—especially helpful when you’re just starting together."
      />
      <div className="grid md:grid-cols-3 gap-6">
        <Step step="1" title="Scope & Estimate" desc="We jump on a call, map the must-haves, and provide a fixed-scope or weekly estimate." />
        <Step step="2" title="Design & Sprint" desc="We create a minimal UI, then build in focused 1-week sprints with async updates." />
        <Step step="3" title="Demo & Deliver" desc="Weekly demos, fast feedback loops, and a production-ready handoff you can own." />
      </div>
    </Container>
  </section>
);

const Edge = () => (
  <section id="work" className="py-20">
    <Container>
      <SectionTitle
        kicker="Why us"
        title="Early-stage partner, not just a vendor"
        sub="We don’t have logos to flaunt yet—and that’s your advantage: more attention, sharper pricing, and founders-who-code energy."
      />
      <div className="grid md:grid-cols-3 gap-6">
        <Testimonial quote="They behaved like product teammates—clarifying scope and pushing for a simpler MVP." name="Pilot Founder" role="Stealth startup" />
        <Testimonial quote="Communication was instant. We had daily progress and a working prototype in days." name="Ops Lead" role="SMB" />
        <Testimonial quote="The code quality made it easy for our in-house team to extend after handoff." name="CTO" role="Seed-stage" />
      </div>
      <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
          <li className="flex items-center gap-2"><Icon name="check" className="text-green-600" /> Clear, fixed scope or weekly rate</li>
          <li className="flex items-center gap-2"><Icon name="check" className="text-green-600" /> Source code ownership & documentation</li>
          <li className="flex items-center gap-2"><Icon name="check" className="text-green-600" /> Clickable prototypes before build</li>
          <li className="flex items-center gap-2"><Icon name="check" className="text-green-600" /> Testing + basic CI pipeline</li>
        </ul>
      </div>
    </Container>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-gradient-to-b from-indigo-50/50 to-white">
    <Container>
      <SectionTitle kicker="Pricing" title="Simple, flexible options" sub="Because we’re new, we keep pricing lean. No surprises." />
      <div className="grid md:grid-cols-3 gap-6">
        {[ 
          { name: "Prototype", price: "$999", desc: "Clickable Figma prototype or coded spike.", items: ["1–2 screens", "72h turnaround", "1 revision"] },
          { name: "MVP Sprint", price: "$1,999", desc: "One focused week to ship a usable slice.", items: ["5 days dev", "Daily updates", "1 demo & handoff"] },
          { name: "Founders Plan", price: "$3,999", desc: "Two-week build for early customers.", items: ["10 days dev", "2 demos", "Basic CI + docs"] },
        ].map((p) => (
          <div key={p.name} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-indigo-600">{p.name}</div>
            <div className="mt-2 text-3xl font-bold">{p.price}</div>
            <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.items.map((it) => (
                <li key={it} className="flex items-center gap-2"><Icon name="check" className="text-green-600" /> {it}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-white font-semibold" onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}>Choose {p.name}</a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-gray-500">Custom scopes welcome. We’ll match the plan to your outcomes.</p>
    </Container>
  </section>
);

const FAQ = () => (
  <section className="py-20">
    <Container>
      <SectionTitle kicker="FAQ" title="Things folks ask us" />
      <div className="mx-auto max-w-3xl">
        <FAQItem q="You’re new—how do I reduce risk?" a="We keep scope small, do weekly demos, and provide code ownership with docs so you can swap or scale easily." />
        <FAQItem q="What stack do you use?" a="React on the front-end, Node/Express on the back-end. We adapt to your infra: Vercel, Netlify, AWS, or simple VPS." />
        <FAQItem q="Do you sign NDAs?" a="Yes. We’re happy to sign mutual NDAs and follow secure handling for assets and data." />
        <FAQItem q="How fast can you start?" a="Within a few days for most prototype/MVP scopes. We plan in 1-week sprints." />
      </div>
    </Container>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-gray-100">
    <Container>
      <SectionTitle kicker="Contact" title="Tell us about your project" sub="We’ll reply with a quick scope and next steps." />
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h2>
        <p className="mb-6 text-gray-600">
          Have a question or want to work with us? Fill out the form below.
        </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Company details</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3"><Icon name="mail" /> hello@jupitorsofttech.com</li>
            <li className="flex items-center gap-3"><Icon name="phone" /> +91-00000-00000</li>
            <li className="flex items-center gap-3"><Icon name="map" /> Remote-first • India</li>
          </ul>
          <div className="mt-6 rounded-xl border border-dashed border-black/20 p-4 text-xs text-gray-500">
            Looking for a custom enterprise scope? Include your target timeline, compliance needs, and any integrations.
          </div>
        </div>
    </Container>
  </section>
);

const Footer = () => (
  <footer className="border-t border-black/10 py-10 text-sm">
    <Container>
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold">JS</div>
          <div>
            <div className="font-semibold">JupitorSoftTechnologies</div>
            <div className="text-xs text-gray-500">© {new Date().getFullYear()} All rights reserved</div>
          </div>
        </div>
        <div className="flex gap-6 text-gray-600">
          <a href="#services" onClick={(e)=>{e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'});}}>Services</a>
          <a href="#process" onClick={(e)=>{e.preventDefault(); document.querySelector('#process')?.scrollIntoView({behavior:'smooth'});}}>Process</a>
          <a href="#pricing" onClick={(e)=>{e.preventDefault(); document.querySelector('#pricing')?.scrollIntoView({behavior:'smooth'});}}>Pricing</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}>Contact</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default function JupitorSoftWebsite() {
  // Inject minimal SEO JSON-LD (works if used in a Next.js/CRA root)
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'JupitorSoftTechnologies',
      url: 'https://jupitorsofttech.com',
      logo: 'https://jupitorsofttech.com/logo.png',
      sameAs: [],
      description: 'A new software studio building modern web apps, MVPs, and internal tools.'
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Edge />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
