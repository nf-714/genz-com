import Categories from "@/components/landing/categories/categories.component";
import HeroSection from "@/components/landing/hero/hero.component";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <>
      {" "}
      <HeroSection />{" "}
      <VelocityScroll
        text="Velocity Scroll"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-indigo-900  drop-shadow-sm dark:text-indigo-600 md:text-7xl md:leading-[5rem]"
      />
      <Categories />
    </>
  );
}
