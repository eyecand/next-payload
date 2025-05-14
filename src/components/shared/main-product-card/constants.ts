export const productCard: PropsProductCard[] = [
  { title: "Sunbeam Tote Jeff", price: 25, img: "/main-product-card/Bag.avif" },
  {
    title: "ShadowStride Shoes",
    price: 20,
    img: "/main-product-card/Shoose.avif",
  },
  {
    title: "Horizon Gaze Sunglasses",
    price: 20,
    img: "/main-product-card/Glasses.avif",
  },
  {
    title: "ZebraBlend T-Shirt",
    price: 55,
    img: "/main-product-card/T-short.avif",
  },
  {
    title: "Gloves with holes",
    price: 1299,
    img: "/main-product-card/Gloves.avif",
  },
  {
    title: "AquaStride Bottle",
    price: 15,
    img: "/main-product-card/Bottle.avif",
  },
];
type PropsProductCard = {
  title: string;
  price: number;
  img: string;
};
