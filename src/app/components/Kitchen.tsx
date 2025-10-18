const Kitchen: React.FC = () => {
  return (
    <section id="kitchen" className="py-20 bg-white text-center">
      <h4 className="text-green-600 font-semibold">Our Kitchen</h4>
      <h2 className="text-3xl font-bold mb-4">What would you like us to prepare?</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        The hotel provides a delicious restaurant meal to satisfy and nourish your stay.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={`/img/kitchen/food-${num}.jpg`}
              alt={`Food ${num}`}
              className="hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Kitchen;
