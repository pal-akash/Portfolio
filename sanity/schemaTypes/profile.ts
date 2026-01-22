import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "E.g., 'Full-Stack Developer Web & Flutter'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headlineStaticText",
      title: "Headline Static Text",
      type: "string",
      description:
        "The static part of your animated headline (e.g., 'I build')",
      placeholder: "I build",
    }),
    defineField({
      name: "headlineAnimatedWords",
      title: "Headline Animated Words",
      type: "array",
      description: "The words that will be animated in your headline",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(2).max(10),
    }),
    defineField({
      name: "headlineAnimatedDuration",
      title: "Headline Animated Duration (ms)",
      type: "number",
      description:
        "How long each word stays visible before flipping (default: 3000ms)",
      initialValue: 3000,
      validation: (Rule) => Rule.min(1000).max(10000),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      description: "Brief introduction (2-3 sentences)",
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [{ type: "block" }],
      description: "Deetailed about section with rich text formatting",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
        },
      ],
    }),
    defineField({
      name: "isOnline",
      title: "Online Status",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "E.g., 'San Francisco, CA' or 'Remote'",
    }),
    defineField({
      name: "availability",
      title: "Availability Status",
      type: "string",
      options: {
        list: [
          {
            title: "Available for hire",
            value: "Available for hire",
          },
          {
            title: "Open to opportunities",
            value: "Open to opportunities",
          },
          {
            title: "Not looking",
            value: "Not looking",
          },
        ],
      },
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "GitHub", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
      ],
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Years of Experience",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "stats",
      title: "Profile Statistics",
      type: "array",
      description: "Key statistics to display on your about section",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "E.g., '50+', '100%', '24/7'",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "firstName",
      subtitle: "headline",
      media: "profileImage",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
