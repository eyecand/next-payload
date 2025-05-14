export const mainCategory: PropsMainCategory[] = [
  {
    category: "apparel",
    title: "Apparel",
    subtitle: "Shop now",
    img: "/main-category/apparel.avif",
  },
  {
    category: "accessories",
    title: "Accessories",
    subtitle: "Shop now",
    img: "/main-category/accessories.avif",
  },
];
type PropsMainCategory = {
  category: string;
  title: string;
  subtitle: string;
  img: string;
};
