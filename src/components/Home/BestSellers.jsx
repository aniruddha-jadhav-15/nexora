import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import SectionHeader from "./SectionHeader";

function BestSellers() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <SectionHeader header={"Best Sellers"} />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(3, 6).map((product) => (
            <ProductCard key={product.id} product={product} variant={"full"} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
