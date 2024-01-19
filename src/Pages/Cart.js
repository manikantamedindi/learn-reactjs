// CartPage.jsx
import React from "react";

const CartPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample cart item */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src="https://via.placeholder.com/150"
            alt="Product"
            className="w-full h-32 object-cover mb-4"
          />
          <h2 className="text-lg font-bold">Product Name</h2>
          <p className="text-gray-700 mb-2">Price: $19.99</p>
          <p className="text-gray-700 mb-2">Quantity: 2</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Remove from Cart
          </button>
        </div>

        {/* Add more cart items as needed */}
      </div>
      <div className="mt-8">
        <p className="text-lg font-bold">Total: $39.98</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
