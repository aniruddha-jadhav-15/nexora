import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Navigation({ toogle, handleOpenClose }) {
  const navLinkStyle = ({ isActive }) =>
    `text-sm font-medium transition-colors
    ${isActive ? "text-primary" : "text-text hover:text-primary"}`;

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      handleOpenClose();
    }
  };

  return (
    <nav
      className={`
        fixed left-0 top-0 z-50 h-screen w-72
        bg-background p-6 shadow-xl
        transition-transform duration-300
        ${toogle ? "translate-x-0" : "-translate-x-full"}

        md:static md:h-auto md:w-auto
        md:translate-x-0 md:bg-transparent
        md:p-0 md:shadow-none
      `}
    >
      {/* Mobile Close */}
      <div className="mb-8 flex justify-end md:hidden">
        <button
          onClick={handleOpenClose}
          className="text-2xl text-text hover:text-primary"
        >
          <IoClose />
        </button>
      </div>

      <ul className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        <li>
          <NavLink to="/" className={navLinkStyle} onClick={handleNavClick}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/shop" className={navLinkStyle} onClick={handleNavClick}>
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/wishlist"
            className={navLinkStyle}
            onClick={handleNavClick}
          >
            Wishlist
          </NavLink>
        </li>

        <li>
          <NavLink to="/cart" className={navLinkStyle} onClick={handleNavClick}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
