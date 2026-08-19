import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import SectionHeader from "./SectionHeader";
function NewArrivals() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <SectionHeader header={"New Arrivals"} />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} variant="full" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewArrivals;
