import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p>© {new Date().getFullYear()} JupitorSoft. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
