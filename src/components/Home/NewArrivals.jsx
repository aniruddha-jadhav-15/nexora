import ProductSlider from "../common/ProductSlider";

function NewArrivals({ products }) {
  let newestProducts = [...products];
  newestProducts = newestProducts
    .sort((a, b) => new Date(b.creationAt) - new Date(a.creationAt))
    .slice(0, 20);

  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <ProductSlider
          title="New Arrivals"
          products={newestProducts}
          variant="compact"
        />
      </div>
    </section>
  );
}

export default NewArrivals;
