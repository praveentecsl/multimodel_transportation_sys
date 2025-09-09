import React from "react";
import { useState } from "react";
import API_BASE_URL from "../utils/api";
import { data } from "autoprefixer";


export default function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    date: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Server response:", data);
      alert("successfully signed up")
    } catch (err) {
      console.error("Error sending data:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={formData.email}
          onChange={handleChange}
          name="email"
        />


        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={formData.phone}
          onChange={handleChange}
          name="phone"
        />

        <select className="w-full border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
          value={formData.gender}
          onChange={handleChange}
          name="gender"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          className="w-full border border-gray-300 p-3 rounded text-gray-500 focus:outline-none focus:ring focus:border-blue-500"
          value={formData.date}
          onChange={handleChange}
          name="date"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
          value={formData.password}
          onChange={handleChange}
          name="password"
        />

        <input
          type="password"
          placeholder="Re-enter Password"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"

        >
          Sign Up
        </button>
        <p className="flex justify-evenly">
          <a href="/">cancle</a>
        </p>
      </form>
    </div>
  );
}
