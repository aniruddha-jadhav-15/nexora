import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
function Navigation({ toogle, handleOpenClose }) {
  return (
    <nav
      className={` fixed top-0 left-0 z-50 h-screen w-64 bg-background p-6 shadow-xl
    transition-transform duration-300  ${toogle ? "translate-x-0" : "-translate-x-full"} transition duration-300 md:flex md:static md:h-auto md:w-auto md:translate-x-0 md:bg-transparent md:p-0 md:shadow-none`}
    >
      <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
        <button
          onClick={handleOpenClose}
          className="mb-6 ml-auto block text-2xl text-text hover:text-primary md:hidden"
        >
          <IoClose />
        </button>
        <li>
          <NavLink
            to="/"
            className="block rounded-lg px-4 py-3 font-medium text-text transition hover:bg-orange-50 hover:text-primary"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className="block rounded-lg px-4 py-3 font-medium text-text transition hover:bg-orange-50 hover:text-primary"
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/wishlist"
            className="block rounded-lg px-4 py-3 font-medium text-text transition hover:bg-orange-50 hover:text-primary"
          >
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="block rounded-lg px-4 py-3 font-medium text-text transition hover:bg-orange-50 hover:text-primary"
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
