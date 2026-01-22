import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSetting",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      description: "Meta description for SEO",
    }),
    defineField({
      name: "siteKeywords",
      title: "Site Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "SEO Keywords",
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: "siteLogo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "32x32 px recommended",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
});
