const Header = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <img
            src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
            alt=""
            className="w-16"
          />
        </div>
        <div className="space-x-10">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
          <a href="#" className="text-white">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
