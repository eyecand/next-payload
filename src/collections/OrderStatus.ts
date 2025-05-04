import type { CollectionConfig } from "payload";

export const OrderStatus: CollectionConfig = {
  slug: "orderStatus",
  fields: [
    {
      name: "Status",
      type: "text",
      required: true,
    },
  ],
};
