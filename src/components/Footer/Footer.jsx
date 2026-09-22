import { Link } from "react-router-dom";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaHeart,
} from "react-icons/fa6";

import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="container py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-text"
            >
              <FaShoppingBag className="text-primary" />
              Nexora
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-text-secondary">
              Your everyday marketplace for quality products at great prices.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-text-secondary transition hover:text-primary"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-text-secondary transition hover:text-primary"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="X"
                className="text-text-secondary transition hover:text-primary"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="text-text-secondary transition hover:text-primary"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-text">Shop</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/shop"
                  className="text-text-secondary transition hover:text-primary"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/wishlist"
                  className="text-text-secondary transition hover:text-primary"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-text-secondary transition hover:text-primary"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-text">Account</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-2 text-text-secondary transition hover:text-primary"
                >
                  <FaHeart />
                  My Wishlist
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="flex items-center gap-2 text-text-secondary transition hover:text-primary"
                >
                  <FaShoppingCart />
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/checkout"
                  className="text-text-secondary transition hover:text-primary"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-text">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-text-secondary transition hover:text-primary"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="text-text-secondary transition hover:text-primary"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/order-confirmation"
                  className="text-text-secondary transition hover:text-primary"
                >
                  Order Confirmation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-border pt-5 text-center">
          <p className="text-xs text-text-secondary sm:text-sm">
            © {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
