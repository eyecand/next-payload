import type { CollectionConfig } from "payload";

export const Cart: CollectionConfig = {
  slug: "cart",

  fields: [
    {
      name: "token",
      type: "text",
      required: true,
    },
    {
      name: "totalAmount",
      type: "number",
      required: true,
    },

    {
      name: "cart",
      type: "relationship",
      relationTo: "users",
    },
  ],
};
