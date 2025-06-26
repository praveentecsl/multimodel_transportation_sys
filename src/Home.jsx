import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-orange-300 text-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TranspoEase</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Your Reliable Transport Partner
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Safe and efficient transportation for everyone.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Book Now
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-10 text-center">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Passenger Transport</h4>
              <p>Daily commutes and long trips made easy.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Logistics</h4>
              <p>Efficient goods delivery anywhere, anytime.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Vehicle Rentals</h4>
              <p>Choose from a wide range of rental vehicles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        © 2025 TranspoEase. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
