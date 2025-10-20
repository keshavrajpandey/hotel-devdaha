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
            <li>📍Sundhara, Kathmandu, Nepal</li>
            <li>
              📞{" "}
              <a href="tel:+9779800000000" className="hover:underline">
                +977 9851062280
              </a>
            </li>
            <li>
              📧{" "}
              <a
                href="mailto:info@hoteldevdaha.com"
                className="hover:underline"
              >
                hoteldevdaha2280@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3532.5382191775902!2d85.30978637546711!3d27.70066387618641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQyJzAyLjQiTiA4NcKwMTgnNDQuNSJF!5e0!3m2!1sen!2snp!4v1760941857993!5m2!1sen!2snp"
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
