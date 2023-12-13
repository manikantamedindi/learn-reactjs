const FoodBlock = () => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden res-card transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <div className="w-full h-48 overflow-hidden image">
        <img
          className="w-full h-full object-cover"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu"
          alt=""
        />
      </div>
      <div className="p-4 content">
        <h3 className="text-xl font-bold mb-2">Silver Dum Biryani</h3>
        <h4 className="text-sm text-gray-700 mb-2">
          Biryani, Chinese, North Indian, Seafood Gurunanak.
        </h4>
        <h4 className="text-yellow-500 font-semibold">4.2 Star Rating</h4>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="HomePage">
      <section>
        <div className="container mx-auto pt-10 pb-10">
          <div class="flex flex-wrap justify-center gap-7">
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
            <FoodBlock />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
