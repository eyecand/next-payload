import type { CollectionConfig } from "payload";

export const Order: CollectionConfig = {
  slug: "order",
  fields: [
    {
      name: "token",
      type: "text",
      required: true,
    },
    { name: "items", type: "json" },
    { name: "totalAmount", type: "number", required: true },
    { name: "paymentId", type: "text" },

    { name: "fullname", type: "text", required: true },
    { name: "email", type: "text", required: true },
    { name: "phone", type: "text", required: true },
    { name: "comment", type: "textarea", required: true },

    {
      name: "order",
      type: "relationship",
      relationTo: ["users", "orderStatus"],
      hasMany: true,
    },
  ],
};
