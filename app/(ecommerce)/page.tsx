import Categories from "@/components/landing/categories/categories.component";
import HeroSection from "@/components/landing/hero/hero.component";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default async function Home() {
  return (
    <>
      {" "}
      <HeroSection />{" "}
      <VelocityScroll
        text="Artistic-Z"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-indigo-900  drop-shadow-sm dark:text-indigo-600 md:text-7xl md:leading-[5rem]"
      />
      <Categories />
      {/* 
      After writing data in the database mongo.db
        <TrendingProducts />
        <TopArrivals />
        <Testimonials />
        <Footer /> 
      */}
    </>
  );
}
