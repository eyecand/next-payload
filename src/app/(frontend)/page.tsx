import { MainBlock } from "@/components/shared/main-block";
import { MainCategory } from "@/components/shared/main-category/main-category";
import { MainProductCard } from "@/components/shared/main-product-card/main-product-card";

export default async function HomePage() {
  return (
    <>
      <MainBlock />
      <MainProductCard />
      <MainCategory />
    </>
  );
}

// {...Array(limit)
//           .fill(0)
//           .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}

//         <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
