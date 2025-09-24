import React from "react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  { title: "Starter", price: "$199", features: ["Basic website", "1 month support", "Deployment"] },
  { title: "Pro", price: "$499", features: ["Web/App development", "3 months support", "Custom UI/UX"] },
  { title: "Enterprise", price: "$999", features: ["Full-scale solution", "Priority support", "Cloud & Deployment"] },
];

function Pricing() {
  return (
    <AnimatedSection>
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-xl shadow-lg transition hover:shadow-xl ${
              idx === 1 ? "border-4 border-blue-600" : "border border-gray-200"
            }`}
          >
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-4xl font-bold my-4">{plan.price}</p>
            <ul className="space-y-2 mb-6 text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}

export default Pricing;
