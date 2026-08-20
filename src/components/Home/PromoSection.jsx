function PromoSection() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* Card 1 */}
          <div className="flex w-full items-center justify-between overflow-hidden rounded-2xl bg-primary px-5 py-6 text-white sm:px-7 lg:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium sm:text-sm">FLASH SALE</p>

              <h3 className="text-2xl font-bold sm:text-3xl">Up To 70% Off</h3>

              <span className="text-sm sm:text-lg">02 : 15 : 45 : 30</span>

              <button className="mt-2 w-fit rounded-lg bg-white px-4 py-2 text-xs font-semibold text-primary sm:px-5 sm:text-sm">
                Shop Sale
              </button>
            </div>

            <div className="w-2/5 sm:w-1/3">
              <img
                src="your-shoe-image"
                alt="Shoe"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-full items-center justify-between overflow-hidden rounded-2xl bg-gray-900 px-5 py-6 text-white sm:px-7 lg:w-1/2">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium sm:text-sm">NEW COLLECTION</p>

              <h3 className="text-2xl font-bold sm:text-3xl">Summer 2026</h3>

              <span className="text-sm">Explore the latest collection</span>

              <button className="mt-2 w-fit rounded-lg bg-white px-4 py-2 text-xs font-semibold text-gray-900 sm:px-5 sm:text-sm">
                Shop Collection
              </button>
            </div>

            <div className="w-2/5 sm:w-1/3">
              <img
                src="your-model-image"
                alt="Collection"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
