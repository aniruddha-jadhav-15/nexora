import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeader from "../Home/SectionHeader";
import ProductCard from "../product/ProductCard";
import { useRef } from "react";

function ProductSlider({ title, products, variant }) {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <section>
      <div className="container">
        <SectionHeader header={title}>
          <button onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <button onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </SectionHeader>
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[220px]">
              <ProductCard product={product} variant={variant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSlider;
