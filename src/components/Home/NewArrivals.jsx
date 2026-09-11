import ProductSlider from "../common/ProductSlider";

function NewArrivals({ products }) {
  let newestProducts = [...products];
  newestProducts = newestProducts.sort((a, b) => b.id - a.id).slice(10, 21);

  return <ProductSlider title="New Arrivals" products={newestProducts} />;
}

export default NewArrivals;
