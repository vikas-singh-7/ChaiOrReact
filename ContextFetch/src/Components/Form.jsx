import React, { useEffect, useState } from "react";
import Mycontext from "../context/context";
import { useContext } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { Contextdata, setData } = useContext(Mycontext);

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    // Handle form submission logic here
    setTimeout(() => {
      fetch("https://api.github.com/users/vikas-singh-7")
        .then((res) => res.json())
        .then((data) => setData(data));
      console.log(Contextdata);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {loading ? "please Wait" : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
