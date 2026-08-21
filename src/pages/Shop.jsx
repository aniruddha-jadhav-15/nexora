import ProductCard from "../components/product/ProductCard";
import useProducts from "../hooks/useProducts";
import { CiSearch } from "react-icons/ci";

function Shop() {
  const { data = [], isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p>Failed to load products.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="flex gap-4">
          {/* Sidebar */}
          <aside className="hidden w-56 shrink-0 rounded-lg border border-border p-4 md:block">
            <h2 className="font-semibold text-text">Filters</h2>

            <div className="mt-5">
              <p className="text-sm font-semibold">Categories</p>

              <div className="mt-3 space-y-2 text-sm text-gray-500">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  Clothes
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  Electronics
                </label>

                <label className="flex gap-2">
                  <input type="checkbox" />
                  Furniture
                </label>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="min-w-0 flex-1">
            {/* Search + Sort */}
            <div className="mb-3 flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <CiSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full rounded-lg border border-border py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary"
                />
              </div>

              <select className="w-full rounded-lg border border-border px-3 py-2 text-sm outline-none focus:border-primary sm:w-auto">
                <option>Sort: Featured</option>
                <option>Price: Low</option>
                <option>Price: High</option>
                <option>Rating</option>
              </select>
            </div>

            {/* Mobile Filter */}
            <button className="mb-3 w-full rounded-lg border border-border py-2 text-sm md:hidden">
              ☰ Filters
            </button>

            {/* Products */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
              {data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
