import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pincode: "",
    payment: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = subtotal >= 1000 ? 0 : 50;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      navigate("/cart");
      return;
    }

    const requiredFields = [
      "name",
      "email",
      "phone",
      "address",
      "city",
      "state",
      "pincode",
    ];

    const hasEmptyField = requiredFields.some(
      (field) => formData[field].trim() === "",
    );

    if (hasEmptyField) {
      alert("Please fill all required fields.");
      return;
    }

    if (!formData.payment) {
      alert("Please select a payment method.");
      return;
    }

    navigate("/order-confirmation");
  };

  if (cartItems.length === 0) {
    return (
      <section className="py-16">
        <div className="container text-center">
          <h1 className="text-2xl font-bold text-text">Your cart is empty</h1>

          <p className="mt-2 text-sm text-text-secondary">
            Add products before proceeding to checkout.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-10">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-text sm:text-3xl">Checkout</h1>

          <p className="mt-1 text-xs text-text-secondary sm:text-sm">
            Complete your order securely.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-8 lg:grid-cols-[1fr_320px]"
        >
          {/* LEFT */}
          <div>
            <h2 className="mb-5 text-lg font-semibold text-text">
              Shipping Information
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label className="mb-1 block text-sm font-medium text-text">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-1 block text-sm font-medium text-text">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-1 block text-sm font-medium text-text">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Address */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-text">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House no, street, area"
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Apartment */}
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-text">
                  Apartment{" "}
                  <span className="text-text-secondary">(Optional)</span>
                </label>

                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleChange}
                  placeholder="Apartment, suite, etc."
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* City */}
              <div>
                <label className="mb-1 block text-sm font-medium text-text">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* State */}
              <div>
                <label className="mb-1 block text-sm font-medium text-text">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="mb-1 block text-sm font-medium text-text">
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  maxLength={6}
                  className="w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* PAYMENT */}
            <h2 className="mb-5 mt-8 text-lg font-semibold text-text">
              Payment Method
            </h2>

            <div className="space-y-3">
              {["Credit / Debit Card", "UPI", "PayPal"].map((method) => (
                <label
                  key={method}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-3 py-4 text-sm transition hover:border-primary"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={formData.payment === method}
                    onChange={handleChange}
                    className="accent-primary"
                  />

                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* RIGHT - ORDER SUMMARY */}
          <aside className="h-fit rounded-xl border border-border bg-surface p-5 sm:p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-text">Order Summary</h2>

            {/* Products */}
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.product.id}-${item.size || "default"}`}
                  className="flex gap-3"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={item.product.images?.[0]}
                      alt={item.product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-xs font-medium text-text">
                      {item.product.title}
                    </p>

                    <p className="mt-1 text-xs text-text-secondary">
                      Qty: {item.quantity}
                      {item.size && ` • Size: ${item.size}`}
                    </p>
                  </div>

                  <span className="text-xs font-semibold text-text">
                    ₹{(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-6 border-t border-border" />

            {/* Prices */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-text-secondary">
                <span>Tax (18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-border pt-3" />

              <div className="flex justify-between text-base font-bold text-text">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Place Order
            </button>
          </aside>
        </form>
      </div>
    </section>
  );
}

export default Checkout;
