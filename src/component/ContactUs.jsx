import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-green-900 mb-6 text-center">Contact Us</h2>

      <form className="bg-white shadow-md rounded px-8 py-8 space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Your phone number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
