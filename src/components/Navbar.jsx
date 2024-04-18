import {FaShoppingCart } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.threads.net%2F%40lovebabbar1%2Fpost%2FCuayALXvXeo&psig=AOvVaw1VsF0IRvAK6GsGAItq335E&ust=1713496111953000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIixw83kyoUDFQAAAAAdAAAAABAE"></img>
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
