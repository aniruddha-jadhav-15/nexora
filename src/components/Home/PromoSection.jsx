import { useNavigate } from "react-router-dom";

function PromoSection() {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="container">
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Flash Sale */}
          <div className="relative flex min-h-[230px] overflow-hidden rounded-2xl bg-primary px-5 py-6 text-white sm:min-h-[260px] sm:px-7">
            <div className="relative z-10 flex max-w-[60%] flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
                Flash Sale
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                Up To 70% Off
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Limited time deals on trending products.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary-light sm:px-5 sm:text-sm"
              >
                Shop Sale
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
              alt="Featured product"
              className="absolute right-[-10px] top-1/2 h-[90%] w-[42%] -translate-y-1/2 object-contain sm:right-2 sm:w-[40%]"
            />
          </div>

          {/* New Collection */}
          <div className="relative flex min-h-[230px] overflow-hidden rounded-2xl bg-gray-900 px-5 py-6 text-white sm:min-h-[260px] sm:px-7">
            <div className="relative z-10 flex max-w-[60%] flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
                New Collection
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                Fresh Finds
              </h3>

              <p className="mt-2 text-sm text-white/70">
                Explore the latest products and new arrivals.
              </p>

              <button
                onClick={() => navigate("/shop")}
                className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-xs font-semibold text-gray-900 transition hover:bg-gray-100 sm:px-5 sm:text-sm"
              >
                Explore Now
              </button>
            </div>

            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
              alt="New collection"
              className="absolute right-[-10px] top-1/2 h-[90%] w-[42%] -translate-y-1/2 object-contain sm:right-2 sm:w-[40%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
