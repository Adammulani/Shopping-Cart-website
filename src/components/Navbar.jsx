import {FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src=""></img>
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
