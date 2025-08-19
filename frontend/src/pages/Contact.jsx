import { useState } from "react";
import API_BASE_URL from "../utils/api";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
      const res = await fetch(`${API_BASE_URL}/api/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      console.log("Server response:", data);
    } catch (err) {
      console.error("Error sending data:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-6 text-blue-700">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Whether you have questions, feedback, or
        need a quote — feel free to reach out.
      </p>

      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            name="message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>

      <div className="mt-8 text-gray-700">
        <p>Email: support@transpoease.com</p>
        <p>Phone: +1 (800) 123-4567</p>
        <p>Address: 123 Transport Lane, Mobility City</p>
      </div>
    </div>
  );
};

export default Contact;
