import useProducts from "../hooks/useProducts";
function Shop() {
  const { data = [] } = useProducts();
  return <>{data.map((pro) => pro.title)}</>;
}

export default Shop;
