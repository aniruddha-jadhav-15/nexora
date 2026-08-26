import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Plus, Minus } from "lucide-react";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);


  // Remove item

  const removeFromCart = (proId) => {
    const filteredArray = cartItems.filter((item) => item.product.id !== proId);

    setCartItems(filteredArray);
  };

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-900">Shopping Cart</h3>
        <p className="text-sm text-gray-400 mt-1 mb-6">
          {cartItems.length} items in your cart
        </p>

        <div className="flex w-full flex-col md:flex-row gap-6">
          {/* Left: Cart Items */}
          <div className="w-full md:w-[65%] flex flex-col gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-gray-200 p-4 grid grid-cols-[auto_1fr_auto_auto] items-center gap-4"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                  <img
                    src={item.product?.images?.[0]}
                    alt={item.product?.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Title / variant / remove \ */}
                <div className="min-w-0">
                  <h4 className="font-semibold text-small text-gray-900">
                    {item.product?.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {item.product?.variant}
                  </p>

                  {/* Quantity  */}
                  <div className="flex md:hidden items-center gap-2 mt-2">
                    <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50">
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium w-4 text-center">
                      {item.quantity}
                    </span>
                    <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50">
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    className="text-sm text-red-500 hover:underline mt-1"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="hidden md:flex items-center gap-2 shrink-0">
                  <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50">
                    <Minus size={12} />
                  </button>
                  <span className="text-sm font-medium w-4 text-center">
                    {item.quantity}
                  </span>
                  <button className="w-6 h-6 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50">
                    <Plus size={12} />
                  </button>
                </div>

                <p className="font-semibold text-gray-900 text-right shrink-0">
                  ${(item.product?.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="w-full md:w-[35%]">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-gray-900 mb-4">
                Order Summary
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">
                    {/* ${subtotal.toFixed(2)} */}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">
                    {/* ${shipping.toFixed(2)} */}
                  </span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span className="font-medium text-gray-900">
                    {/* ${tax.toFixed(2)} */}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-xl font-bold text-gray-900">
                  {/* ${total.toFixed(2)} */}
                </span>
              </div>

              <input
                type="text"
                placeholder="Coupon code"
                className="w-full mt-5 px-4 py-3 rounded-xl border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
