import { defineField, defineType } from "sanity";

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "institution",
      title: "Institution Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      description: "E.g., 'Bachelor of Science', 'Master of Computer Science'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fieldOfStudy",
      title: "Field of Study",
      type: "string",
      description: "E.g., 'Computer Science', 'Software Engineering'",
    }),
    defineField({
      name: "cgpa",
      title: "CGPA",
      type: "string",
      description: "E.g., '3.8/4', '8.0/10'",
    }),
    defineField({
      name: "educationType",
      title: "Education Type",
      type: "string",
      options: {
        list: [
          { title: "Regular", value: "regular" },
          { title: "Remote", value: "remote" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Leave blank if current position",
    }),
    defineField({
      name: "current",
      title: "Current Education",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of course works",
    }),
    defineField({
      name: "instituteLogo",
      title: "Institute Logo",
      type: "url",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (0-99)",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(99),
    }),
    defineField({
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "Quantifiable accomplishments",
    }),
  ],
  preview: {
    select: {
      title: "institution",
      subtitle: "degree",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
});
