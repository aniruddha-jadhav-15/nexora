import { useContext } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const navigate = useNavigate();

  // Remove specific product + size
  const removeFromCart = (productId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.size === size),
      ),
    );
  };

  // Update specific product + size quantity
  const updateQuantity = (productId, size, type) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && item.size === size) {
          return {
            ...item,
            quantity:
              type === "increase"
                ? Math.min(item.quantity + 1, item.product.stock)
                : Math.max(1, item.quantity - 1),
          };
        }

        return item;
      }),
    );
  };

  // Empty cart
  if (cartItems.length === 0) {
    return (
      <section className="py-16 md:py-20">
        <div className="container flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-light text-primary">
            <ShoppingBag size={30} />
          </div>

          <h2 className="mt-5 text-xl font-bold text-text sm:text-2xl">
            Your cart is empty
          </h2>

          <p className="mt-2 max-w-sm text-sm text-text-secondary">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/shop"
            className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  // Calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = subtotal >= 1000 ? 0 : 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <section className="py-6 md:py-10">
      <div className="container">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-text sm:text-3xl">
            Shopping Cart
          </h1>

          <p className="mt-1 text-sm text-text-secondary">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => {
              const { product, quantity, size } = item;

              return (
                <div
                  key={`${product.id}-${size || "default"}`}
                  className="rounded-xl border border-border bg-white p-4"
                >
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <Link
                      to={`/shop/${product.id}`}
                      className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-surface p-3 sm:h-28 sm:w-28"
                    >
                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="h-full w-full object-contain"
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <Link
                            to={`/shop/${product.id}`}
                            className="line-clamp-2 text-sm font-semibold text-text transition hover:text-primary sm:text-base"
                          >
                            {product.title}
                          </Link>

                          {/* Size */}
                          {size && (
                            <p className="mt-1 text-xs text-text-secondary">
                              Size: {size}
                            </p>
                          )}
                        </div>

                        {/* Remove */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id, size)}
                          className="shrink-0 text-text-secondary transition hover:text-error"
                          aria-label="Remove product"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="mt-2 text-base font-bold text-primary">
                        ₹{product.price}
                      </p>

                      {/* Quantity + Item Total */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex h-9 items-center rounded-lg border border-border">
                          {/* Decrease */}
                          <button
                            type="button"
                            disabled={quantity <= 1}
                            onClick={() =>
                              updateQuantity(product.id, size, "decrease")
                            }
                            className="flex h-8 w-8 items-center justify-center text-text-secondary transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="w-8 text-center text-sm font-semibold text-text">
                            {quantity}
                          </span>

                          {/* Increase */}
                          <button
                            type="button"
                            disabled={quantity >= product.stock}
                            onClick={() =>
                              updateQuantity(product.id, size, "increase")
                            }
                            className="flex h-8 w-8 items-center justify-center text-text-secondary transition hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <p className="text-sm font-bold text-text sm:text-base">
                          ₹{(product.price * quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl border border-border bg-surface p-5 sm:p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-bold text-text">Order Summary</h2>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span className="font-medium text-text">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span className="font-medium text-text">
                  {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Tax</span>
                <span className="font-medium text-text">₹{tax.toFixed(2)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="mt-5 border-t border-border pt-5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-text">Total</span>

                <span className="text-xl font-bold text-primary">
                  ₹{total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Checkout */}
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="mt-4 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white"
            >
              Proceed to Checkout
            </button>

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="mt-3 w-full text-sm font-medium text-text-secondary hover:text-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
