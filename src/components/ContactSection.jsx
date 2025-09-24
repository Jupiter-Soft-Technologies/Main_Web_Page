import React from "react";
import ContactForm from "../ContactForm";
import AnimatedSection from "./AnimatedSection";

function ContactSection() {
  return (
    <AnimatedSection>
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-12 text-lg max-w-xl mx-auto">
        Let’s discuss your idea and build something amazing together.
      </p>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </section>
    </AnimatedSection>
  );
}

export default ContactSection;
