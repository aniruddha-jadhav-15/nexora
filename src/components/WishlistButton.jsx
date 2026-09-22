import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import toast from "react-hot-toast";
function WishlistButton({ product }) {
  const { wishlist, addWishList, removeFromWishlist } =
    useContext(WishlistContext);
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const toggleWishList = () => {
    isWishlisted ? removeFromWishlist(product.id) : addWishList(product);
  };
  return (
    <button className="text-xl hover:scale-110 transition cursor-pointer">
      <CiHeart
        onClick={(e) => {
          e.stopPropagation();
          toggleWishList();
          toast.success("Added to wishlist!");
        }}
      />
    </button>
  );
}

export default WishlistButton;
