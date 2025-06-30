import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
        />

        <select className="w-full border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          className="w-full border border-gray-300 p-3 rounded text-gray-500 focus:outline-none focus:ring focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
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
