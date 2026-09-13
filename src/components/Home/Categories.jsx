import ProductSlider from "../common/ProductSlider";

function Categories({ products }) {
  let filteredProducts = products;
  const Categories = filteredProducts.map((product) => product.category);
  const uniqueCategories = [...new Set(Categories)];

  const categoryProducts = uniqueCategories
    .map((category) => {
      const product = products.find((product) => product.category === category);

      return product;
    })
    .filter((product) => product !== undefined);

  return (
    <section className="py-8 md:py-10">
      <div className="container">
        <ProductSlider
          title="Shop by Categories"
          products={categoryProducts}
          variant="minimal"
        />
      </div>
    </section>
  );
}

export default Categories;
