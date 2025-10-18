const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/img/about/about.jpg"
          alt="About Hotel Devdaha"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h4 className="text-green-600 font-semibold">About Us</h4>
          <h2 className="text-3xl font-bold mb-4">
            A Brief History Of Hotel Devdaha & Restaurant
          </h2>
          <p className="text-gray-700 mb-4">
            Hotel Devdaha & Restaurant, founded by{" "}
            <strong>Jyoti Kandel</strong> and the <strong>Families</strong> 15
            years ago. Started from Devdaha, these families have been in the
            hospitality industry ever since...
          </p>
          <a
            href="#kitchen"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
          >
            Learn More <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
