import React from "react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { title: "Plan", desc: "We analyze your idea and create a roadmap.", icon: "📝" },
  { title: "Design", desc: "UI/UX crafted for stunning digital experiences.", icon: "🎨" },
  { title: "Develop", desc: "Agile development for fast, scalable delivery.", icon: "⚡" },
  { title: "Launch", desc: "Deploy and support your product to scale.", icon: "🚀" },
];

function Process() {
  return (
    <AnimatedSection>
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Process</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}

export default Process;
