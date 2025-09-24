import React from "react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Mobile App Development",
    desc: "Build high-performing apps with Flutter and React Native.",
    icon: "📱",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive, and scalable websites that impress.",
    icon: "💻",
  },
  {
    title: "Custom Software",
    desc: "Tailored solutions designed to streamline your business.",
    icon: "⚙️",
  },
  {
    title: "Cloud & Deployment",
    desc: "Secure hosting and cloud-native applications with Firebase & AWS.",
    icon: "☁️",
  },
];

function Services() {
  return (
    <AnimatedSection>
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
}

export default Services;
