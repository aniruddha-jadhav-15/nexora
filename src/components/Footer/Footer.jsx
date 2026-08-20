function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-white mt-5">
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold">Nexora</h2>
          <p className="mt-3 text-sm text-gray-400">
            Shop quality products for your everyday lifestyle.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>All Products</li>
            <li>Categories</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Stay Updated</h3>
          <p className="mb-3 text-sm text-gray-400">
            Get updates about new products and offers.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-lg bg-gray-900 px-3 py-2 text-sm outline-none"
            />
            <button className="rounded-r-lg bg-primary px-4 text-sm font-semibold">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-8 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
        © 2026 Nexora. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
