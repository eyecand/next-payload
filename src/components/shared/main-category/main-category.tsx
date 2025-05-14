import Link from "next/link";
import { mainCategory } from "./constants";
import Image from "next/image";

export const MainCategory = () => {
  return (
    <section className="w-full py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {mainCategory.map((item, index) => (
          <Link
            key={index}
            href={`category/${item.category}`}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                alt="main-category"
                src={item.img}
                width={1200}
                height={675}
                className="w-full scale-105 object-cover transition-all group-hover:scale-100 group-hover:opacity-75"
              />
            </div>
            <div className="justify-end gap-2 px-4 py-2 text-neutral-600">
              <h4 className="text-lg font-bold tracking-tight">{item.title}</h4>
              <p>{item.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
