import ProductSlider from "../common/ProductSlider";

function BestSellers({ products }) {
  let bestSellersProducts = [...products];
  bestSellersProducts = bestSellersProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <ProductSlider
          title="Best Sellers"
          products={bestSellersProducts}
          variant="featured"
        />
      </div>
    </section>
  );
}

export default BestSellers;
