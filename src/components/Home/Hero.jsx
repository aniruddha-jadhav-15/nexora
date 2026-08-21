function Hero() {
  return (
    <section className="py-6">
      <div className="container">
        <div
          className="
            flex flex-col
            gap-8
            rounded-2xl
            border border-border
            bg-surface
            p-5
            md:flex-row
            md:items-center
            md:gap-10
            md:p-7
          "
        >
          {/* Left Content */}
          <div className="flex flex-1 flex-col justify-center">
            <span className="text-small font-bold text-primary">
              TRENDING NOW
            </span>

            <h1 className="mt-2 text-h1 font-bold leading-tight text-text">
              Discover Products <br className="hidden md:block" />
              You'll Love
            </h1>

            <p className="mt-4 max-w-lg text-body text-text-secondary">
              Discover trending products curated for your everyday lifestyle.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                className="
                  h-10 rounded-lg
                  bg-primary px-6
                  text-small font-semibold text-white
                  transition-colors duration-200
                  hover:bg-primary-dark
                "
              >
                Shop Now
              </button>

              <button
                className="
                  h-10 rounded-lg
                  border border-border
                  bg-background px-6
                  text-small font-semibold text-text
                  transition-colors duration-200
                  hover:bg-primary hover:text-white
                "
              >
                Explore
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="
              flex h-[240px] w-full
              items-center justify-center
              overflow-hidden rounded-xl
              bg-background
              md:h-[295px] md:flex-1
            "
          >
            <img
              // src=""
              alt="Featured Nexora products"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
