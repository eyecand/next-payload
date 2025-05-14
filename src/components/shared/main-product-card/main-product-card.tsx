import Link from "next/link";
import { productCard } from "./constants";
import Image from "next/image";

export const MainProductCard = () => {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {productCard.map((item, index) => (
        <li key={index} className="group">
          <Link href={"/product"}>
            <article className="overflow-hidden bg-white">
              <div className="rounded-lg aspect-square w-full overflow-hidden bg-neutral-100">
                <Image
                  alt="main-product-card"
                  className="w-full bg-neutral-100 object-cover object-center transition-opacity hover:opacity-75"
                  src={item.img}
                  width={768}
                  height={768}
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-medium text-neutral-700">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-neutral-900">
                  ${item.price}
                </p>
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
};
