import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to="/">
            <img
              src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
              alt=""
              className="w-16"
            />
          </NavLink>
        </div>
        <div className="space-x-10">
          <NavLink to="/" className="text-white" activeClassName="active-link">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-white"
            activeClassName="active-link"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white"
            activeClassName="active-link"
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/cart"
            className="text-white"
            activeClassName="active-link"
          >
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
