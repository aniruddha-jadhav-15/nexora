import { useContext } from "react";
import { CiTrash } from "react-icons/ci";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const total = wishlist.reduce((total, product) => total + product.price, 0);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          {/* Wishlist Items */}
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="flex gap-3 rounded-xl border border-border bg-white p-3 sm:gap-5 sm:p-4"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50 sm:h-28 sm:w-28">
                <img
                  src={product.images?.[0]}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-medium text-text sm:text-base">
                      {product.title}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                      {product.category?.name}
                    </p>

                    <p className="mt-1 text-xs text-primary sm:text-sm">
                      ⭐ {product.rating?.rate || "4.5"}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="shrink-0 text-xl text-gray-400 hover:text-red-500"
                  >
                    <CiTrash />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-primary sm:text-base">
                    ${product.price}
                  </span>

                  <button
                    className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white sm:px-4"
                    onClick={() => addToCart(product, null, 1)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="h-fit rounded-xl border border-border p-5">
          <h2 className="text-lg font-semibold">Wishlist Summary</h2>

          <div className="mt-5 flex justify-between">
            <span>Total Items</span>
            <span>{wishlist.length}</span>
          </div>

          <div className="my-4 border-t border-border" />

          <div className="flex justify-between">
            <span>Estimated Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button
            className="mt-5 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white"
            onClick={() => addToCart(product, null, 1)}
          >
            Add All to Cart
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Wishlist;
