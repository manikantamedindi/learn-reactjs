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
        <ul class="divide-y divide-gray-200">
          <li className="text-red bg-red-600">Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const FoodContainer = () => {
  return (
    <div className="res-card">
      <div className="image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu"
          alt=""
        />
      </div>
      <div className="content">
        <h3>Silver Dum Biryani</h3>
        <h4>Biryani, Chinese, North Indian, Seafood Gurunanak.</h4>
        <h4>4.2 Start Rating</h4>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <div className="res-container">
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
        <FoodContainer />
      </div>
    </div>
  );
};

export default App;
