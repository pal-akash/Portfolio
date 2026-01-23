import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Programming Language", value: "programming-language" },
          { title: "Framework", value: "framework" },
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Database", value: "database" },
          { title: "Tools", value: "tools" },
          { title: "Soft Skills", value: "soft-skills" },
          { title: "Other", value: "other" },
          { title: "Cloud", value: "cloud" },
          { title: "Testing", value: "testing" },
          { title: "Design", value: "design" },
          // { title: "AI/ML", value: "ai-ml" },
          // { title: "DevOps", value: "devops" },
          // { title: "Mobile", value: "mobile" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "proficiency",
    //   title: "Proficiency Level",
    //   type: "string",
    //   options: {
    //     list: [
    //       { title: "Beginner", value: "beginner" },
    //       { title: "Intermediate", value: "intermediate" },
    //       { title: "Advanced", value: "advanced" },
    //       { title: "Expert", value: "expert" },
    //     ],
    //   },
    //   validation: (Rule) => Rule.required(),
    // }),
    // defineField({
    //   name: "percentage",
    //   title: "Proficiency Percentage",
    //   type: "number",
    //   description: "0-100 for visual progress bars",
    //   validation: (Rule) => Rule.min(0).max(100),
    // }),
    // defineField({
    //   name: "yearsOfExperience",
    //   title: "Years of Experience",
    //   type: "number",
    //   validation: (Rule) => Rule.min(0),
    // }),
    defineField({
      name: "icon",
      title: "Skill Icon",
      type: "string",
      description:
        "Icon name or URL representing the skill (e.g., 'react', 'nodejs', or a custom URL)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
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
