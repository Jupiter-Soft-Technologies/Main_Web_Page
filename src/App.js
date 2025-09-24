import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <section id="hero"><Hero /></section>
      <TrustedBy />
      <section id="services"><Services /></section>
      <section id="process"><Process /></section>
      <WhyChooseUs />
      <Testimonials />
      <section id="pricing"><Pricing /></section>
      <section id="faq"><FAQ /></section>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
