import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "How long does a project take?", a: "It depends on scope, but typically 2-6 weeks for MVPs." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer monthly support & maintenance plans." },
  { q: "Can you help with deployment?", a: "Absolutely, we handle hosting, cloud setup, and deployment." },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <AnimatedSection>
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">FAQ</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow cursor-pointer"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <h3 className="font-semibold text-lg">{item.q}</h3>
            {open === idx && <p className="text-gray-600 mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}

export default FAQ;
