import { useContext } from "react";
import { CiTrash } from "react-icons/ci";
import { ShoppingBag } from "lucide-react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const total = wishlist.reduce((total, product) => total + product.price, 0);

  const addAllToCart = () => {
    wishlist.forEach((product) => {
      addToCart(product, null, 1);
      toast.success("Added to cart!");
    });
  };

  // Empty Wishlist
  if (wishlist.length === 0) {
    return (
      <section className="py-16 md:py-20">
        <div className="container flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
            <ShoppingBag size={30} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-text sm:text-2xl">
            Your wishlist is empty
          </h2>

          <p className="mt-2 max-w-sm text-sm text-text-secondary">
            Save products you love and find them here later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 md:py-10">
      <div className="container">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text sm:text-3xl">
            My Wishlist
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Wishlist Items */}
          <div className="space-y-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border border-border bg-white p-4"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-surface p-3 sm:h-28 sm:w-28">
                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="line-clamp-2 text-sm font-semibold text-text sm:text-base">
                          {product.title}
                        </h3>

                        <p className="mt-1 text-xs capitalize text-text-secondary sm:text-sm">
                          {product.category}
                        </p>

                        <p className="mt-1 text-xs text-text-secondary">
                          ⭐ {product.rating || "4.5"}
                        </p>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeFromWishlist(product.id)}
                        className="shrink-0 text-xl text-text-secondary transition hover:text-error"
                        aria-label="Remove from wishlist"
                      >
                        <CiTrash />
                      </button>
                    </div>

                    {/* Bottom */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-base font-bold text-primary">
                        ₹{product.price}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          addToCart(product, null, 1);
                          toast.success("Added to cart!");
                        }}
                        className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-dark sm:text-sm"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="h-fit rounded-xl border border-border bg-surface p-5 sm:p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-text">Wishlist Summary</h2>

            <div className="mt-5 flex justify-between text-sm">
              <span className="text-text-secondary">Total Items</span>

              <span className="font-semibold text-text">{wishlist.length}</span>
            </div>

            <div className="my-5 border-t border-border" />

            <div className="flex justify-between">
              <span className="text-sm text-text-secondary">
                Estimated Total
              </span>

              <strong className="text-lg text-text">₹{total.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              onClick={addAllToCart}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              <ShoppingBag size={17} />
              Add All to Cart
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Wishlist;
