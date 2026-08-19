import { products } from "../../data/products";
import ProductCard from "../product/ProductCard";
import SectionHeader from "./SectionHeader";
function Categories() {
  return (
 <section>
  <div className="container w-full">
    <SectionHeader header={"Shop by Categories"} />
    <div className="flex w-full gap-3 overflow-x-hidden flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="shrink-0 w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(16.66%-10px)]"
        >
          <ProductCard product={product} variant="minimal" />
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default Categories;
