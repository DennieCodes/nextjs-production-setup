import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome</h1>
      <h2 className="text-lg text-center mb-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
