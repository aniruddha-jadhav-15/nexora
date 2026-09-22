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
    return (
      <section className="flex min-h-[50vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-light border-t-primary" />

          <p className="text-sm font-medium text-text-secondary">
            Loading products...
          </p>
        </div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-medium text-error">
          Failed to load products. Please try again.
        </p>
      </section>
    );
  }
  return (
    <>
      <Hero products={data} />
      <Benefits />
      <Categories products={data} />
      <NewArrivals products={data} />
      <BestSellers products={data} />
      <PromoSection />
    </>
  );
}

export default Home;
