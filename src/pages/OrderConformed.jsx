import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderConfirmed() {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckCircle size={44} strokeWidth={2} />
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl font-bold text-text sm:text-3xl">
            Order Confirmed!
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-text-secondary sm:text-base">
            Thank you for your purchase. Your order has been successfully placed
            and will be processed shortly.
          </p>

          {/* Order Info */}
          <div className="mx-auto mt-8 max-w-md rounded-xl border border-border bg-surface p-5 text-left sm:p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Order Number</span>

              <span className="text-sm font-semibold text-text">
                #NX-2026-001
              </span>
            </div>

            <div className="my-4 border-t border-border" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Status</span>

              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                Confirmed
              </span>
            </div>

            <div className="my-4 border-t border-border" />

            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">
                Estimated Delivery
              </span>

              <span className="text-sm font-semibold text-text">
                3–5 Business Days
              </span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-8">
            <h2 className="text-base font-semibold text-text">
              What happens next?
            </h2>

            <p className="mt-2 text-sm text-text-secondary">
              We'll prepare your order and send you an update when it ships.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              <ShoppingBag size={17} />
              Continue Shopping
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text transition hover:bg-surface"
            >
              Back to Home
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderConfirmed;
