import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[0px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-row items-center justify-center gap-5 lg:gap-14 -mx-4">
          <div className="animate-heading w-full px-4 lg:w-4/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    src="https://overlays.co/cdn/shop/files/LavenderButterflyPhoto_5.jpg?v=1713960829&width=700"
                    alt=""
                    width={700}
                    height={700}
                    className="w-full	rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <Image
                    src="https://overlays.co/cdn/shop/files/NavyWingsPhoto_1.jpg?v=1713529921&width=200"
                    alt=""
                    width={700}
                    height={700}
                    className="w-full	rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image
                    src="https://overlays.co/cdn/shop/files/GreywildPhoto_5.jpg?v=1713962022&width=700"
                    alt=""
                    width={700}
                    height={700}
                    className="w-full	rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="right-to-center">
              <div
                className={cn(
                  "group w-5/12 lg:w-8/12 rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-indigo-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨Official Clothing Line for GenZ ✨</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>

              <br />
              <br />
              <h2 className="right-to-center mb-5 tracking-widest	 text-2xl md:text-4xl lg:text-5xl lg:font-extralight lg:text-wrap font-bold text-zinc-900 dark:text-gray-100 sm:text-[40px]/[48px]">
                Level Up Your Look with{" "}
                <span className="text-indigo-900  dark:text-indigo-600 font-extrabold">
                  Artistic Comfort Apparel
                </span>
              </h2>
              <p className="right-to-center text-gray-500 mb-8 text-base dark:text-gray-300">
                LWSkart: Premium casual wear made for living life on the go
              </p>
              <Link href="/product">
                <Button
                  variant="outline"
                  className="animate-lower bg-indigo-700 text-indigo-200 w-40 border-primary-green hover:bg-indigo-500"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
