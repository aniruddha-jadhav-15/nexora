import AnnouncementBar from "../components/Home/AnnouncementBar";
import Hero from "../components/Home/Hero";
import Benefits from "../components/Home/Benefits";
import Categories from "../components/Home/Categories";
import NewArrivals from "../components/Home/NewArrivals";
import BestSellers from "../components/Home/BestSellers";
import PromoSection from "../components/Home/PromoSection";
function Home() {
  return (
    <>
      <AnnouncementBar />
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
