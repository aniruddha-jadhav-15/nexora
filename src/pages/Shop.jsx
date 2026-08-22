import { useState } from "react";
import ProductCard from "../components/product/ProductCard";
import useProducts from "../hooks/useProducts";
import { CiSearch } from "react-icons/ci";

function Shop() {
  const [userSearch, setUserSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { data = [], isLoading, isError } = useProducts();

  let filteredData = data;

  // Search
  filteredData = filteredData.filter((product) =>
    product.title.toLowerCase().includes(userSearch.toLowerCase()),
  );

  // Category

  const categories = data.map((product) => product.category?.name);

  const uniqueCategories = [...new Set(categories)];
  const handleCategory = (e) => {
    const category = e.target.value;

    setSelectedCategories((prev) =>
      e.target.checked
        ? [...prev, category]
        : prev.filter((item) => item !== category),
    );
  };
  if (selectedCategories.length > 0) {
    filteredData = filteredData.filter((product) =>
      selectedCategories.includes(product.category?.name),
    );
  }

  // Loading and Error
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

  data.forEach((product) => {
    product.images.forEach((image) => {
      if (!image.startsWith("http")) {
        console.log("Bad image:", product.id, image);
      }
    });
  });

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
                {uniqueCategories.map((cat) => {
                  return (
                    <label className="flex gap-2" key={cat}>
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={handleCategory}
                      />
                      {cat}
                    </label>
                  );
                })}
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
                  onChange={(e) => setUserSearch(e.target.value)}
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
              {filteredData.map((product) => (
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
