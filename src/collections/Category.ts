import type { CollectionConfig } from "payload";

export const Category: CollectionConfig = {
  slug: "category",

  fields: [
    {
      name: "category",
      type: "text",
      required: true,
    },
    {
      name: "categoryId",
      type: "number",
      required: true,
    },
  ],
};
