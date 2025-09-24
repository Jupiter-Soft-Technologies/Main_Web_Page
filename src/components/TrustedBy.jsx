import React from "react";

function TrustedBy() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-lg font-semibold text-gray-600 mb-6">
        Trusted By Teams Using
      </h2>
      <div className="flex justify-center space-x-10 opacity-80">
        <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" className="h-12" />
        <img src="https://cdn.worldvectorlogo.com/logos/flutter.svg" alt="Flutter" className="h-12" />
        <img src="https://cdn.worldvectorlogo.com/logos/firebase-1.svg" alt="Firebase" className="h-12" />
        <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" className="h-12" />
      </div>
    </section>
  );
}

export default TrustedBy;
