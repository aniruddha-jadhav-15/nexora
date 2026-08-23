import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const { data, isError, isLoading } = useProducts();
  const product = data?.find((product) => product.id === Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Product not found</p>;

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="flex h-[350px] items-center justify-center rounded-xl border border-border bg-surface p-4 sm:h-[450px]">
              <img
                src={product?.images?.[0]}
                alt={product?.title}
                className="h-full w-full object-contain rounded-xl"
              />
            </div>

            {/* Small Images */}
            <div className="mt-3 flex gap-3 overflow-x-auto">
              {product?.images?.map((image, index) => (
                <div
                  key={index}
                  className="h-20 min-w-20 rounded-lg border border-border bg-surface p-2"
                >
                  <img
                    src={image}
                    alt={product?.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-xl font-bold text-text sm:text-2xl">
              {product?.title}
            </h1>

            <div className="mt-2 flex items-center gap-2">
              <Star size={16} className="fill-orange-400 text-orange-400" />
              <span className="text-sm text-gray-600">{product?.rating}</span>
            </div>

            <p className="mt-4 text-2xl font-bold text-text">
              ₹{product?.price}
            </p>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              {product?.description}
            </p>

            {/* Size */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold">Size</p>

              <div className="flex gap-2">
                {[7, 8, 9, 10, 11].map((size) => (
                  <button
                    type="button"
                    key={size}
                    className="h-9 w-10 rounded-md border border-border text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold">Quantity</p>

              <div className="flex h-10 w-28 items-center justify-between rounded-md border border-border px-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity((prev) => Math.max(1, prev - 1));
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded text-lg font-medium text-gray-600 transition-colors hover:bg-surface active:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={quantity <= 1}
                >
                  −
                </button>

                <p className="w-6 text-center text-sm font-semibold text-text">
                  {quantity}
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuantity((prev) => prev + 1);
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded text-lg font-medium text-gray-600 transition-colors hover:bg-surface active:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Cart + wishlist */}
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                className="flex-1 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-95"
              >
                <Heart
                  size={18}
                  className="text-gray-500 transition-colors duration-200 group-hover:text-red-400"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
