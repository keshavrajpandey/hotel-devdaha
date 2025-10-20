"use client";

import { PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="relative">
        <div
          className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-5xl font-bold"
          style={{ backgroundImage: "url('/img/about/about-post.jpg')" }}
        >
          {/* 🔹 Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          {/* Content */}
          <h1 className="relative z-10 drop-shadow-lg">About Us</h1>
        </div>
      </header>

      {/* About Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="space-y-6">
          <h4 className="text-green-600 font-semibold uppercase">About Us</h4>
          <h1 className="text-3xl font-bold">
            History Of Hotel Devdaha & Restaurant
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Hotel Devdaha & Restaurant, founded by <strong>Jyoti Kandel</strong>{" "}
            and family 15 years ago, has remained a landmark of hospitality and
            warmth. Over time, it has evolved with modern amenities while
            keeping its charm intact. The stunning Buddha Maoli, serene hidden
            village, and one of Asia’s largest trees continue to be key
            attractions that symbolize our deep connection with nature and
            peace.
          </p>
        </section>
      </main>

      {/* Rooms Section */}
      <section id="rooms" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-green-600 font-semibold">
            Book your accommodations now!
          </h4>
          <h2 className="text-4xl font-bold mb-4">Rooms</h2>
          <p className="text-gray-600 mb-10">
            Experience our luxurious and comfortable rooms designed for every
            kind of traveler.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Standard Room", img: "/img/rooms/room-1.jpg" },
              { title: "Premium Room", img: "/img/rooms/room-2.jpg" },
              { title: "Deluxe Room", img: "/img/rooms/room-3.jpg" },
            ].map((room, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <Image
                  src={room.img}
                  alt={room.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Standard condition</li>
                    <li>Single Size</li>
                    <li>Room service</li>
                  </ul>
                  <button
                    onClick={() => {
                      router.push(`/#contact`);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury & Experience Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            A Life of Luxury & Comfort
          </h1>
          <p className="text-gray-700 leading-relaxed">
            A life of luxury begins the moment you arrive. This is your
            sanctuary of comfort and calm. Designed for deep relaxation, our
            rooms embrace you with plush linens and elegant interiors. Every
            detail anticipates your needs—our world-class dining, attentive
            staff, and tranquil services redefine sophisticated living. Your
            journey into unparalleled relaxation begins here.
          </p>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">
            Ecstatic & Life Changing Experience
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Step into a world where every moment feels renewed. Each experience
            at Hotel Devdaha awakens joy, clarity, and peace within you. We
            craft more than stays — we create transformations that resonate long
            after your visit. Let your spirit find the breakthrough it’s been
            seeking.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-green-600 text-white py-8">
        <p className="flex items-center gap-2 text-lg">
          <PhoneCallIcon /> Support 24/7: +977 9851062280
        </p>
      </div>
    </div>
  );
}
