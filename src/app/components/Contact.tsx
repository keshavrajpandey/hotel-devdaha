"use client";
import { useState, FormEvent } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h4 className="text-green-600 font-semibold mb-2">Contact Us</h4>
          <h2 className="text-3xl font-bold mb-4">We’d Love To Hear From You</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Reach out to us via phone, email,
            or the contact form. We’ll get back to you as soon as possible.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              📍 Devdaha-1, Rupandehi, Nepal
            </li>
            <li>
              📞 <a href="tel:+9779800000000">+977 9800000000</a>
            </li>
            <li>
              📧 <a href="mailto:info@hoteldevdaha.com">info@hoteldevdaha.com</a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
