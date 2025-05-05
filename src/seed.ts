import type { SanitizedConfig } from "payload";

import payload from "payload";
const seedDataProducts = [
  {
    id: 1,
    title: "Gloves with holes",
    image: "Gloves-with-holes.avif",
    descroption:
      "Yes, you read that right. Gloves that have holes in them. Not very useful now, is it? But at least it's expensive.",
    price: 1299,
    category: 1,
  },
  {
    id: 2,
    title: "ZebraBlend T-Shirt",
    image: "ZebraBlend-T-Shirt.avif",
    descroption:
      "Show off your wild side with this unique white and brown striped t-shirt. Made from 100% organic cotton, it offers both comfort and durability. Its eye-catching design makes it perfect for any casual occasion.",
    price: 44,
    category: 1,
    variant: "Brown",
  },
  {
    id: 3,
    title: "Azure Escape Bag",
    image: "Azure-Escape-Bag-Plain.avif",
    descroption:
      "Escape in style with our captivating blue bag. Its deep hue is reminiscent of ocean depths, perfect for any adventure. The roomy interior and sturdy straps make it ideal for travel or everyday use.",
    price: 270,
    category: 2,
    variant: "Plain",
  },
  {
    id: 4,
    title: "Azure Escape Bag",
    image: "Azure-Escape-Bag-Crocodile.avif",
    descroption:
      "Escape in style with our captivating blue bag. Its deep hue is reminiscent of ocean depths, perfect for any adventure. The roomy interior and sturdy straps make it ideal for travel or everyday use.",
    price: 250,
    category: 2,
    variant: "Crocodile",
  },
  {
    id: 5,
    title: "AquaStride Bottle",
    image: "AquaStride-Bottle.avif",
    descroption:
      "Stay hydrated on the go with our leak-proof, stainless steel water bottle. Its double-wall insulation keeps beverages cold for up to 24 hours. The ergonomic design fits comfortably in your hand.",
    price: 20,
    category: 2,
  },
];
const seedDataCategories = [
  {
    id: 1,
    category: "Accessories",
    categoryId: 1,
  },
  {
    id: 2,
    category: "Apparel",
    categoryId: 2,
  },
];
const seedDataOrderStatus = [
  {
    id: 1,
    Status: "CANCELLED",
  },
  {
    id: 2,
    Status: "SUCCEEDED",
  },
  {
    id: 3,
    Status: "PENDING",
  },
];
// Script must define a "script" function export that accepts the sanitized config
export const script = async (config: SanitizedConfig) => {
  await payload.init({ config });
  for (const item of seedDataProducts) {
    await payload.create({
      collection: "products",
      data: item,
    });
  }
  for (const item of seedDataCategories) {
    await payload.create({
      collection: "category",
      data: item,
    });
  }
  for (const item of seedDataOrderStatus) {
    await payload.create({
      collection: "orderStatus",
      data: item,
    });
  }
  payload.logger.info("Succesffully seeded!");
  process.exit(0);
};
