import Image from "next/image";

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50 text-center">
      <h4 className="text-green-600 font-semibold">Our Rooms</h4>
      <h2 className="text-3xl font-bold mb-4">Luxury Accommodation</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        Choose from our comfortable rooms designed for relaxation and
        convenience.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {[
          {
            title: "Deluxe Room",
            img: "/img/rooms/room-1.jpg",
            desc: "Spacious and comfortable room with modern facilities.",
          },
          {
            title: "Executive Suite",
            img: "/img/rooms/room-2.jpg",
            desc: "Elegant design and luxury features for the perfect stay.",
          },
          {
            title: "Family Room",
            img: "/img/rooms/room-3.jpg",
            desc: "Ideal for families seeking comfort and privacy.",
          },
        ].map((room, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <Image
              width={100}
              height={100}
              src={room.img}
              alt={room.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 mb-4">{room.desc}</p>
              <a
                href="#contact"
                className="text-green-600 font-semibold hover:underline"
              >
                Book Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
