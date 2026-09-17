import { defineField, defineType } from "sanity";

export default defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    defineField({
      name: "internalTitle",
      title: "Internal title",
      type: "string",
      description: "For your own reference in the Studio only — not shown publicly.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mediaType",
      title: "Media type",
      type: "string",
      options: { list: ["video", "photo"], layout: "radio" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoAsset",
      title: "Video",
      type: "file",
      description: "Upload here for now. Mux delivery gets wired in once the Mux account is connected — see README.",
      hidden: ({ document }) => document?.mediaType !== "video",
    }),
    defineField({
      name: "posterImage",
      title: "Poster / cover image",
      type: "image",
      options: { hotspot: true },
      description: "The 4:5 grid cover. Hotspot lets you pick the focal point instead of always center-cropping.",
      hidden: ({ document }) => document?.mediaType !== "video",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      description: "Add one photo for a single image, or several for a swipeable stack. First photo is the grid cover.",
      hidden: ({ document }) => document?.mediaType !== "photo",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Featured items get more visual weight in the grid.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers show first. Drag to reorder in the list view instead of typing numbers.",
    }),
    defineField({
      name: "visible",
      title: "Visible on site",
      type: "boolean",
      initialValue: true,
      description: "Turn off to hide without deleting.",
    }),
    defineField({
      name: "partner",
      title: "Related partner",
      type: "reference",
      to: [{ type: "partner" }],
      description: "Optional — link this piece of work to a long-term partner relationship.",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "internalTitle", media: "posterImage", type: "mediaType", visible: "visible" },
    prepare({ title, media, type, visible }) {
      return {
        title,
        subtitle: `${type}${visible === false ? " · hidden" : ""}`,
        media,
      };
    },
  },
});
