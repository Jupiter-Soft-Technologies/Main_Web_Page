import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9l00qaa",   // 🔹 from EmailJS dashboard
        "template_6ads65m",  // 🔹 from EmailJS dashboard
        form.current,
        "MeJGLo1n0E50tSA4I"    // 🔹 from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("😊 Thanks for reaching out to us 😊");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-4 max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg"
>
  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
    required
  />
  <button
    type="submit"
    className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 font-semibold"
  >
    Send Query
  </button>
</form>

  );
}

export default ContactForm;
