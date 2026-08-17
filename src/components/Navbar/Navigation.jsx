import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <nav className="navbar hidden md:flex ">
      <ul className=" flex gap-10">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/wishlist">Wishlist</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
