import ProductSlider from "../common/ProductSlider";

function BestSellers({ products }) {
  let bestSellersProducts = [...products];
  bestSellersProducts = bestSellersProducts
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return <ProductSlider title="Best Sellers" products={bestSellersProducts} />;
}

export default BestSellers;
