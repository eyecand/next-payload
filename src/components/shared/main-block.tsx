import { Button } from "../ui/button";
import Image from "next/image";
export const MainBlock = () => {
  return (
    <section className="rounded bg-neutral-100 py-8 sm:py-12">
      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
        <div className="max-w-md space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Discover our Curated Collection
          </h2>
          <p className="text-pretty text-neutral-600">
            Explore our carefully selected products for your home and lifestyle.
          </p>
          <a href="/category/accessories">
            <Button>Shop Now</Button>
          </a>
        </div>
        <Image alt="cup" src={"/Cup.avif"} width={1080} height={1080} />
      </div>
    </section>
  );
};
