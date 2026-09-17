import { defineField, defineType } from "sanity";

export default defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Used as alt text and as a fallback if no logo is uploaded yet.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload a monochrome/white or soft-grey logo for the best result — matches the site's existing treatment.",
    }),
    defineField({
      name: "url",
      title: "Link (optional)",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
    defineField({
      name: "visible",
      title: "Visible on site",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", media: "logo", visible: "visible" },
    prepare({ title, media, visible }) {
      return { title, subtitle: visible === false ? "hidden" : "visible", media };
    },
  },
});
