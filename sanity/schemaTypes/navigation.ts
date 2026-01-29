import { defineField, defineType } from "sanity";

export default defineType({
    name: "navigation",
    title: "Navigation",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "href",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "isExternal",
            title: "Is External",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "icon",
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
