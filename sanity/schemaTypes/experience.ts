import { defineField, defineType } from "sanity";

export default defineType({
    name: "expirience",
    title: "Work Experience",
    type: "document",
    fields: [
        defineField({
            name: "company",
            title: "Company Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "position",
            title: "Position/Role",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "employmentType",
            title: "Employment Type",
            type: "string",
            options: {
                list: [
                    { title: "Full-time", value: "full-time" },
                    { title: "Part-time", value: "part-time" },
                    { title: "Contract", value: "contract" },
                    { title: "Freelance", value: "freelance" },
                    { title: "Internship", value: "internship" },
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "City, State or 'Remote'",
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
            title: "Current Position",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ],
            description: "Detailed job responsibilities and achievements",
        }),
        defineField({
            name: "responsibilities",
            title: "Key Responsibilities",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            description: "Bullet points of main responsibilities",
        }),
        defineField({
            name: "achievements",
            title: "Key Achievements",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            description: "Quantifiable accomplishments",
        }),
        defineField({
            name: "technologies",
            title: "Technologies Used",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "skill" }]
                }
            ],
        }),
        defineField({
            name: "companyLogo",
            title: "Company Logo",
            type: "url",
        })
    ],
    preview: {
        select: {
            title: "company",
            subtitle: "position",
        },
        prepare(selection) {
            const { title, subtitle } = selection
            return {
                title: title,
                subtitle: subtitle,
            }
        },
    }
})