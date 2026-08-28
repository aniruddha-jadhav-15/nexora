import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Checkout() {
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

  const navigate = useNavigate();

  const placeOrder = () => {
    navigate("/order-confirmation");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === "",
    );

    if (hasEmptyField) {
      alert("Please fill all fields");
      return;
    }

    placeOrder();
  };

  console.log(formData);

  return (
    <section className="container mx-auto px-4 py-8 sm:py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text sm:text-3xl">Checkout</h1>
        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
          Complete your order securely.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={onSubmit} className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold text-text">
            Shipping Information
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-medium">Full Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                placeholder="Enter full name"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter email address"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Enter phone number"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                placeholder="Enter address"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">Apartment / Suite</label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                placeholder="Enter apartment / suite"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter city"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                placeholder="Enter state"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-xs font-medium">ZIP Code</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                placeholder="Enter zip code"
                className="mt-2 w-full rounded-lg border border-border px-3 py-3 text-sm outline-none focus:border-primary"
                onChange={handleChange}
              />
            </div>
          </div>

          <h2 className="mb-5 mt-8 text-lg font-semibold text-text">
            Payment Method
          </h2>

          <div className="space-y-3">
            {["Credit / Debit Card", "UPI", "PayPal"].map((method) => (
              <label
                key={method}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-border px-3 py-4 text-sm"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  className="accent-primary"
                  onChange={handleChange}
                />
                {method}
              </label>
            ))}
          </div>
        </div>

        {/* Order Summery */}
        <aside className="h-fit rounded-xl border border-border bg-surface p-5 sm:p-6 lg:sticky lg:top-6">
          <h2 className="text-lg font-semibold text-text">Order Summary</h2>

          <div className="mt-6 space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span>Air Max 270</span>
              <span>$129.99</span>
            </div>

            <div className="flex justify-between">
              <span>Essential Hoodie</span>
              <span>$59.99</span>
            </div>

            <div className="flex justify-between">
              <span>Wireless Headphones</span>
              <span>$79.99</span>
            </div>
          </div>

          <div className="my-6 border-t border-border" />

          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>$269.97</span>
            </div>

            <div className="flex justify-between text-gray-500">
              <span>Shipping + Tax</span>
              <span>$32.30</span>
            </div>

            <div className="flex justify-between pt-2 text-base font-bold">
              <span>Total</span>
              <span>$302.27</span>
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
    </section>
  );
}

export default Checkout;
