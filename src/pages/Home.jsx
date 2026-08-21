import Hero from "../components/Home/Hero";
import Benefits from "../components/Home/Benefits";
import Categories from "../components/Home/Categories";
import NewArrivals from "../components/Home/NewArrivals";
import BestSellers from "../components/Home/BestSellers";
import PromoSection from "../components/Home/PromoSection";
import useProducts from "../hooks/useProducts";
function Home() {
  const { data = [], isError, isLoading } = useProducts();
  if (isLoading) {
    return <p>Loading products...</p>;
  }
  if (isError) {
    return <p>Failed to load products.</p>;
  }
  console.log(data);

  return (
    <>
      <Hero />
      <Benefits />
      <Categories />
      <NewArrivals />
      <BestSellers />
      <PromoSection />
    </>
  );
}

export default Home;
