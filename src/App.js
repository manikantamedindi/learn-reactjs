import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
