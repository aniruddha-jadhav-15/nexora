import StarRating from "../common/StarRating";
import { useNavigate } from "react-router-dom";
import WishlistButton from "../WishlistButton";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import toast from "react-hot-toast";

function ProductCard({ product, variant = "default" }) {
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  const {
    id,
    title,
    images,
    price,
    discountPercentage,
    rating,
    reviews,
    stock,
    category,
  } = product;

  const oldPrice =
    discountPercentage > 0
      ? Math.round(price / (1 - discountPercentage / 100))
      : null;

  const reviewCount = reviews?.length || 0;

  const handleProductClick = () => {
    navigate(`/shop/${id}`);
  };

  // MINIMAL

  if (variant === "minimal") {
    return (
      <div
        onClick={handleProductClick}
        className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-white"
      >
        <div className="relative flex h-44 items-center justify-center bg-surface p-4">
          <img
            src={images?.[0]}
            alt={title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-3">
          <p className="truncate text-xs capitalize text-text-secondary">
            {category}
          </p>

          <h4 className="mt-1 truncate text-sm font-semibold text-text">
            {title}
          </h4>
        </div>
      </div>
    );
  }

  //  COMPACT

  if (variant === "compact") {
    return (
      <div
        onClick={handleProductClick}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-white"
      >
        <div className="relative flex h-40 shrink-0 items-center justify-center bg-surface p-3 sm:h-48">
          {discountPercentage > 0 && (
            <span className="absolute left-2 top-2 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-semibold text-white">
              -{Math.round(discountPercentage)}%
            </span>
          )}

          <div
            className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <WishlistButton product={product} />
          </div>

          <img
            src={images?.[0]}
            alt={title}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-3">
          <h3 className="line-clamp-2 h-10 text-sm font-semibold leading-5 text-text">
            {title}
          </h3>

          <div className="flex items-center gap-2">
            <StarRating rating={rating} size={13} />

            <span className="text-xs text-text-secondary">({reviewCount})</span>
          </div>

          <div className="mt-auto">
            <span className="text-base font-bold text-primary">₹{price}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, null, 1);
              toast.success("Added to cart!");
            }}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>
        </div>
      </div>
    );
  }

  //  DEFAULT

  return (
    <div
      onClick={handleProductClick}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative flex h-52 shrink-0 items-center justify-center bg-surface p-4 sm:h-60">
        {discountPercentage > 0 && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-bold text-white sm:text-xs">
            -{Math.round(discountPercentage)}%
          </span>
        )}

        <div
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <WishlistButton product={product} />
        </div>

        <img
          src={images?.[0]}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="h-5 truncate text-xs capitalize text-text-secondary">
          {category}
        </p>

        <h4 className="mt-1 line-clamp-2 h-5 text-sm font-semibold leading-5 text-text sm:text-base">
          {title}
        </h4>

        {/* Rating */}
        <div className="mt-2 flex h-5 items-center gap-2">
          <StarRating rating={rating} size={14} />

          <span className="text-xs text-text-secondary">
            {rating?.toFixed(2)}
          </span>

          <span className="text-xs text-text-secondary">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex h-8 items-center gap-2">
          <span className="text-base font-bold text-primary sm:text-lg">
            ₹{price}
          </span>

          {oldPrice && (
            <span className="text-xs text-text-secondary line-through sm:text-sm">
              ₹{oldPrice}
            </span>
          )}
        </div>

        {/* Discount */}
        <div className="mt-2 h-7">
          {discountPercentage > 0 && (
            <span className="inline-flex rounded-md bg-primary-light px-2 py-1 text-[10px] font-semibold text-primary sm:text-xs">
              {Math.round(discountPercentage)}% OFF
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="mt-2 flex h-5 items-center gap-1.5 text-xs">
          <span
            className={`h-2 w-2 rounded-full ${
              stock > 0 ? "bg-success" : "bg-error"
            }`}
          />

          <span className={stock > 0 ? "text-success" : "text-error"}>
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          disabled={stock <= 0}
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product, null, 1);
            toast.success("Added to cart!");
          }}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-border"
        >
          <ShoppingCart size={17} />
          {stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
