import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import WishlistButton from "../components/WishlistButton";
import StarRating from "../components/common/StarRating";
import { ShoppingCart, Truck, RotateCcw } from "lucide-react";
import ProductCard from "../components/product/ProductCard";
import toast from "react-hot-toast";
function ProductDetails() {
  const { id } = useParams();
  const { data, isError, isLoading } = useProducts();
  const { addToCart } = useContext(CartContext);

  const product = data?.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container">
          <div className="grid animate-pulse gap-8 md:grid-cols-2">
            <div className="h-[400px] rounded-2xl bg-surface" />
            <div className="space-y-5">
              <div className="h-8 w-3/4 rounded bg-surface" />
              <div className="h-5 w-32 rounded bg-surface" />
              <div className="h-8 w-40 rounded bg-surface" />
              <div className="h-24 w-full rounded bg-surface" />
              <div className="h-10 w-48 rounded bg-surface" />
              <div className="h-12 w-full rounded bg-surface" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isError || !product) {
    return (
      <section className="py-16">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-xl font-semibold text-text">Product not found</h2>

          <p className="mt-2 text-sm text-text-secondary">
            We couldn't find the product you're looking for.
          </p>
        </div>
      </section>
    );
  }

  const oldPrice =
    product.discountPercentage > 0
      ? Math.round(product.price / (1 - product.discountPercentage / 100))
      : null;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    toast.success("Added to cart!");
  };

  // Clothing & Shoe Size Selection

  const clothingCategories = ["mens-shirts", "womens-dresses"];

  const shoeCategories = ["mens-shoes", "womens-shoes"];

  const sizes = clothingCategories.includes(product.category)
    ? ["M", "L", "XL", "XXL", "XXXL"]
    : shoeCategories.includes(product.category)
      ? [7, 8, 9, 10, 11]
      : [];

  return (
    <section className="py-6 md:py-10">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Images */}
          <div>
            <div className="relative flex h-[350px] items-center justify-center rounded-2xl border border-border bg-surface p-6 sm:h-[450px]">
              {product.discountPercentage > 0 && (
                <span className="absolute left-4 top-4 rounded-md bg-primary px-2 py-1 text-xs font-semibold text-white">
                  -{Math.round(product.discountPercentage)}%
                </span>
              )}

              <img
                src={product.images?.[selectedImage]}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto">
              {product.images?.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`flex h-20 min-w-20 items-center justify-center rounded-lg border bg-surface p-2 ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <p className="text-sm capitalize text-text-secondary">
              {product.category}
            </p>

            <h1 className="mt-2 text-2xl font-bold leading-tight text-text sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <StarRating rating={product.rating} size={16} />

              <span className="text-sm text-text-secondary">
                {product.rating?.toFixed(1)}
              </span>

              <span className="text-sm text-text-secondary">
                ({product.reviews?.length || 0} reviews)
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">
                ₹{product.price}
              </span>

              {oldPrice && (
                <span className="text-sm text-text-secondary line-through">
                  ₹{oldPrice}
                </span>
              )}
            </div>

            {product.discountPercentage > 0 && (
              <span className="mt-2 inline-block rounded-md bg-primary-light px-2 py-1 text-xs font-semibold text-primary">
                {Math.round(product.discountPercentage)}% OFF
              </span>
            )}

            <p className="mt-5 text-sm leading-6 text-text-secondary">
              {product.description}
            </p>

            {/* Size */}

            {sizes.length > 0 && (
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold text-text">Size</p>

                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`h-10 min-w-11 rounded-lg border px-3 text-sm ${
                        selectedSize === size
                          ? "border-primary bg-primary text-white"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-semibold text-text">Quantity</p>

              <div className="flex h-10 w-28 items-center justify-between rounded-lg border border-border px-1">
                <button
                  type="button"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="h-8 w-8 rounded hover:bg-surface disabled:opacity-40"
                >
                  −
                </button>

                <span className="text-sm font-semibold">{quantity}</span>

                <button
                  type="button"
                  disabled={quantity >= product.stock}
                  onClick={() =>
                    setQuantity((prev) => Math.min(product.stock, prev + 1))
                  }
                  className="h-8 w-8 rounded hover:bg-surface disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                disabled={product.stock <= 0}
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:bg-border"
              >
                <ShoppingCart size={18} />
                {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>

              <WishlistButton product={product} />
            </div>

            {/* Product Benefits */}
            <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="text-sm font-semibold">Fast Shipping</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {product.shippingInformation}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RotateCcw className="mt-0.5 text-primary" size={20} />
                <div>
                  <p className="text-sm font-semibold">Easy Returns</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {product.returnPolicy}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <span className="font-semibold">Stock:</span>{" "}
              <span
                className={product.stock > 0 ? "text-success" : "text-error"}
              >
                {product.stock > 0
                  ? `${product.stock} available`
                  : "Out of stock"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <section className="mt-10 border-t border-border pt-8">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
              Customer Reviews
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              What customers say about this product
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            {/* Rating Summary */}
            <div className="rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-4xl font-bold text-text">
                {product.rating?.toFixed(1)}
              </p>

              <div className="mt-2 flex justify-center">
                <StarRating rating={product.rating} size={18} />
              </div>

              <p className="mt-2 text-sm text-text-secondary">
                {product.reviews?.length || 0} reviews
              </p>
            </div>

            {/* Reviews */}
            <div className="space-y-4">
              {product.reviews?.length > 0 ? (
                product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-border bg-white p-4 sm:p-5"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-text">
                          {review.reviewerName}
                        </p>

                        <div className="mt-1">
                          <StarRating rating={review.rating} size={14} />
                        </div>
                      </div>

                      <span className="text-xs text-text-secondary">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-text-secondary">
                      {review.comment}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-text-secondary">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <section className="py-10">
        <div className="container">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-text sm:text-2xl">
              Similar Products
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              You may also like these products
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {data
              ?.filter(
                (item) =>
                  item.category === product.category && item.id !== product.id,
              )
              .slice(0, 4)
              .map((item) => (
                <ProductCard key={item.id} product={item} variant="compact" />
              ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default ProductDetails;
