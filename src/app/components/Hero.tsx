const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="h-screen bg-[url('/img/home/home.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
    >
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Enjoy Your Stay</h1>
      <p className="text-lg mb-6 drop-shadow-md">
        We give you a legendary welcome, when you come back
      </p>
      <a
        href="#about"
        className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2"
      >
        <span>Read More</span>
        <i className="fas fa-chevron-right"></i>
      </a>
    </section>
  );
};

export default Hero;
