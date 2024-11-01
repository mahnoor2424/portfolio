"use client";

import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/; // Adjust for different formats if needed
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phone || !message) {
      setError('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    // If all fields are filled and valid
    setError('');
    alert('Thank you for contacting us! We will get back to you shortly.');

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="contact p-6 bg-gray-100 w-[100%]" id="Contact">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
