import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <Link to="/login" className="nav-login">
        Login
      </Link>
      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
