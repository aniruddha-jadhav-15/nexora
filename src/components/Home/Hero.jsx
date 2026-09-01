import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero({ products = [] }) {
  const navigate = useNavigate();

  const mainProduct = products[0];
  const cardProduct1 = products[1];
  const cardProduct2 = products[2];

  const handleShop = () => {
    navigate("/shop");
  };

  return (
    <section className="py-6 md:py-8">
      <div className="container">
        <div className="grid overflow-hidden rounded-3xl bg-primary-light md:min-h-[500px] md:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-9 md:px-12 lg:px-16">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary sm:text-sm">
              Trending Now
            </span>

            <h1 className="mt-3 text-3xl font-bold leading-tight text-text sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Products
              <br />
              You'll Love
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-text-secondary sm:text-base">
              Shop trending products across electronics, fashion, home,
              accessories and more.
            </p>

            <button
              onClick={handleShop}
              className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Shop Now
              <FaArrowRight className="text-xs" />
            </button>
          </div>

          {/* Product */}
          <div className="relative flex h-[220px] items-center justify-center px-4 md:h-auto">
            {mainProduct && (
              <img
                src={mainProduct.images?.[0]}
                alt={mainProduct.title}
                className="relative z-10 h-[200px] w-[85%] object-contain sm:h-[240px] md:h-[420px] md:w-[80%]"
              />
            )}

            {/* Desktop cards */}
            {cardProduct1 && (
              <div className="absolute left-4 top-8 z-20 hidden w-36 rounded-xl bg-white p-3 shadow-lg lg:block">
                <img
                  src={cardProduct1.images?.[0]}
                  alt={cardProduct1.title}
                  className="h-20 w-full object-contain"
                />
                <p className="mt-2 truncate text-xs font-medium text-text">
                  {cardProduct1.title}
                </p>
                <p className="mt-1 text-sm font-bold text-primary">
                  ${cardProduct1.price}
                </p>
              </div>
            )}

            {cardProduct2 && (
              <div className="absolute bottom-8 right-4 z-20 hidden w-36 rounded-xl bg-white p-3 shadow-lg lg:block">
                <img
                  src={cardProduct2.images?.[0]}
                  alt={cardProduct2.title}
                  className="h-20 w-full object-contain"
                />
                <p className="mt-2 truncate text-xs font-medium text-text">
                  {cardProduct2.title}
                </p>
                <p className="mt-1 text-sm font-bold text-primary">
                  ${cardProduct2.price}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
