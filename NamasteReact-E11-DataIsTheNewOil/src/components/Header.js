import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/foodvilla.png";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2" src={Logo} alt="Logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-[#64ff004f] shadow-lg sticky top-0 hover:shadow-slate-500">
      <Title />

      <ul className="flex py-10">
        <li className="px-2 text-xl">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 text-xl">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2 text-xl">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="px-2 text-xl">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-2 text-xl">Cart</li>
      </ul>

      <div className="mx-4">
        <div>
          <Link to="/login" className="nav-login">
            {isOnline ? "✅" : "🔴"} Login{" "}
            <span className="block text-red-900 font-bold">{user.name}</span>
          </Link>
        </div>
      </div>

      {/* {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
    </div>
  );
};

export default Header;
