import { useContext } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";

function NavbarIcons() {
  // Data
  const { cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  // Cart Count
  const cartCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="flex items-center gap-4 text-text">
      <button className="hidden md:block" onClick={() => navigate("./shop")}>
        <CiSearch className="h-6 w-6 hover:text-primary" />
      </button>
      <button className="relative" onClick={() => navigate("/wishlist")}>
        <CiHeart className="h-6 w-6 hover:text-primary" />
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
          {wishlist.length}
        </span>
      </button>

      <button className="relative" onClick={() => navigate("/cart")}>
        <IoCartOutline className="h-6 w-6 hover:text-primary" />

        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
          {cartCount}
        </span>
      </button>
    </div>
  );
}

export default NavbarIcons;
