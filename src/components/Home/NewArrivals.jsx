import ProductSlider from "../common/ProductSlider";

function NewArrivals({ products }) {
  let newestProducts = [...products];
  newestProducts = newestProducts
    .sort((a, b) => new Date(b.creationAt) - new Date(a.creationAt))
    .slice(0, 20);

  return <ProductSlider title="New Arrivals" products={newestProducts} />;
}

export default NewArrivals;
