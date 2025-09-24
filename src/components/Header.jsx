import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold text-blue-600">JupitorSoftTechnologies</div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
