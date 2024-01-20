import React from "react";

const FoodItems = [
  {
    name: "Silver Dum Biryani",
    recepie: "Biryani, Chinese, North Indian, Seafood Gurunanak.",
    rating: "4.2 Star Rating",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu",
  },
  {
    name: "Golden Dum Biryani",
    recepie: "Biryani, Chinese, North Indian, Seafood Gurunanak.",
    rating: "4.5 Star Rating",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu",
  },
  {
    name: "Silver Dum Biryani",
    recepie: "Biryani, Chinese, North Indian, Seafood Gurunanak.",
    rating: "4.2 Star Rating",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu",
  },
  {
    name: "Golden Dum Biryani",
    recepie: "Biryani, Chinese, North Indian, Seafood Gurunanak.",
    rating: "4.5 Star Rating",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu",
  },
  {
    name: "Silver Dum Biryani",
    recepie: "Biryani, Chinese, North Indian, Seafood Gurunanak.",
    rating: "4.2 Star Rating",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu",
  },
  {
    name: "Golden Dum Biryani",
    recepie: "Biryani, Chinese, North Indian, Seafood Gurunanak.",
    rating: "4.5 Star Rating",
    imageUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu",
  },
];

const FoodBlock = ({ name, recepie, rating, imageUrl }) => {
  return (
    <div className="bg-white rounded-md shadow-md overflow-hidden res-card transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
      <div className="w-full h-48 overflow-hidden image">
        <img className="w-full h-full object-cover" src={imageUrl} alt={name} />
      </div>
      <div className="p-4 content">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <h4 className="text-sm text-gray-700 mb-2">{recepie}</h4>
        <h4 className="text-yellow-500 font-semibold">{rating}</h4>
      </div>
    </div>
  );
};

const Homepage = () => {
  return (
    <div className="HomePage">
      <section>
        <div className="container mx-auto pt-10 pb-10">
          <div className="flex flex-wrap justify-center gap-7">
            {FoodItems.map((food, index) => (
              <FoodBlock key={index} {...food} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
