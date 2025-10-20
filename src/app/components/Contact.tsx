"use client";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
        <div>
          <h4 className="text-green-600 font-semibold mb-2">Contact Us</h4>
          <h2 className="text-3xl font-bold mb-4">
            We’d Love To Hear From You
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Reach out to us via phone, email,
            or visit us at our location. We’ll be happy to help you anytime.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>📍 Devdaha-1, Rupandehi, Nepal</li>
            <li>
              📞{" "}
              <a href="tel:+9779800000000" className="hover:underline">
                +977 9800000000
              </a>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:info@hoteldevdaha.com"
                className="hover:underline"
              >
                info@hoteldevdaha.com
              </a>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.567757040321!2d83.51287067508933!3d27.68061902719209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996874c567ffecb%3A0x57e40f9afcb0e82b!2sDevdaha%2C%20Rupandehi!5e0!3m2!1sen!2snp!4v1696666666666!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
