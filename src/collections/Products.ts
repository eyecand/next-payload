import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "text",
      required: true,
    },
    { name: "descroption", type: "textarea", required: true },
    { name: "price", type: "number", required: true },
    { name: "variant", type: "text" },
    {
      name: "category",
      type: "relationship",
      relationTo: "category",
    },
  ],
};
