import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, variant }) {
  const navigate = useNavigate();
  if (!product) return null;
  const { title, images, price, category, rating, tag } = product;
  const handleProductClick = () => {
    navigate(`/shop/${product.id}`);
  };

  if (variant === "minimal") {
    return (
      <div className="w-full">
        <div
          className="overflow-hidden rounded-xl border border-border bg-white cursor-pointer"
          onClick={handleProductClick}
        >
          <div className="flex h-28 w-full items-center justify-center p-2">
            <img
              src={images?.[0]}
              alt={title}
              className="h-full w-full rounded-lg object-cover object-top"
            />
          </div>

          <div className="px-3 py-2">
            <p className="text-sm font-semibold text-text">{category?.name}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-shadow hover:shadow-md sm:rounded-2xl sm:p-3 cursor-pointer"
      onClick={handleProductClick}
    >
      {/* Image */}
      <div className="relative flex aspect-square items-center justify-center rounded-lg bg-gray-100 p-3 sm:rounded-xl sm:p-5">
        {tag && (
          <span className="absolute left-2 top-2 rounded-full bg-orange-100 px-2 py-1 text-[9px] font-semibold text-orange-500 sm:text-xs">
            {tag}
          </span>
        )}

        <button className="absolute right-2 top-2 rounded-full bg-white p-1.5 shadow-sm">
          <Heart size={15} className="text-gray-500 sm:h-[18px] sm:w-[18px]" />
        </button>

        <img
          src={images?.[0]}
          alt={title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="mt-2 space-y-1 sm:mt-3">
        <h3 className="truncate text-xs font-semibold text-text sm:text-sm">
          {title}
        </h3>

        <div className="flex items-center gap-1">
          <Star size={13} className="fill-orange-400 text-orange-400" />

          <span className="text-xs font-medium text-gray-700">{rating}</span>
        </div>

        <p className="text-sm font-bold text-text">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
