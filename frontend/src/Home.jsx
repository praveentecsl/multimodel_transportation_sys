import React, { useState } from "react";
import ImgHome from "./assets/images/homepage.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [message, setmessage] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setmessage(data.message))
      .catch((err) => console.error("API call failed", err));
  };
  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      {/* <header className="bg-orange-300 text-white shadow p-4">
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
      </header> */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={ImgHome}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-black- text-center px-4">
          <h2 className="text-4xl font-bold mb-4">
            Your Reliable Transport Partner
          </h2>
          <p className="text-lg mb-6 font-bold mb-3">
            Safe and efficient transportation for everyone.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-red-700"
              onClick={handleSignUp}
            >
              Sign up
            </button>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-red-700"
              onClick={handleLogIn}
            >
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-10 text-center">
            praveen chandeepa
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-100 p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Passenger Transport</h4>
              {message && <p>{message}</p>}
            </div>
            <div className="bg-purple-300 p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">Logistics</h4>
              <p>Efficient goods delivery anywhere, anytime.</p>
            </div>
            <div className="bg-green-100 p-6 rounded shadow">
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
