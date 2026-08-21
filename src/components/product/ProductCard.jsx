import { Heart, Star } from "lucide-react";

function ProductCard({ product, variant }) {
  const { title, images, price, category, rating, tag } = product;

  if (variant === "minimal") {
    return (
      <div className="w-full">
        <div className="rounded-xl border border-border bg-white overflow-hidden">
          <div className="flex h-28 w-full items-center justify-center p-2">
            <img
              src={images?.[0]}
              alt={title}
              className="h-full w-full object-cover object-top rounded-lg"
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
    <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative rounded-xl bg-gray-100 p-6 flex items-center justify-center">
        {tag && (
          <span className="absolute top-2 left-2 bg-orange-100 text-orange-500 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        )}

        <button className="absolute top-2 right-2 bg-surface rounded-full p-1.5 shadow-sm">
          <Heart size={18} className="text-text-secondery" />
        </button>

        <img
          src={images?.[0]}
          alt={title}
          className="w-24 h-24 object-contain"
        />
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="font-semibold text-text">{title}</h3>

        <div className="flex items-center gap-1">
          <Star size={16} className="fill-orange-400 text-orange-400" />
          <span className="text-small font-medium text-gray-700">{rating}</span>
        </div>

        <p className="text-body font-bold text-text">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
