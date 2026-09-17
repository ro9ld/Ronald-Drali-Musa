import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "instagramHandle",
      title: "Instagram handle",
      type: "string",
      description: "Without the @ symbol, e.g. ro9ld",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Contact email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "copyrightName",
      title: "Footer copyright name",
      type: "string",
      initialValue: "Ronald Musa",
    }),
    defineField({
      name: "ongoingHeading",
      title: "Ongoing content — heading",
      type: "string",
      initialValue: "Keep your content consistent",
    }),
    defineField({
      name: "ongoingSupporting",
      title: "Ongoing content — supporting line",
      type: "string",
      initialValue: "Photo and video made for your social media",
    }),
    defineField({
      name: "ongoingRhythm",
      title: "Ongoing content — closing line",
      type: "string",
      initialValue: "One-off shoots or ongoing packages",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
