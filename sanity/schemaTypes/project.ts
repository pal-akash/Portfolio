import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Project Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            description: "Short one-liner about the project",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative Text",
                    description: "Important for accessibility",
                }
            ]
        }),
        defineField({
            name: "technologies",
            title: "Technologies Used",
            type: "array",
            of: [{ type: "reference", to: [{ type: "skill" }] }],
            description: "Select from your skills list (max 6 recommended)",
            validation: (Rule) => Rule.max(6),
        }),
        defineField({
            name: "category",
            title: "Project Category",
            type: "string",
            options: {
                list: [
                    {
                        title: "Web Application", value: "web-app"
                    },
                    {
                        title: "Mobile Application", value: "mobile-app"
                    },
                    {
                        title: "AI/ML project", value: "ai-ml",
                    },
                    {
                        title: "API/Backend", value: "api-backend",
                    },
                    {
                        title: "DevOps/Infrastructure", value: "devops"
                    },
                    {
                        title: "Open Source", value: "open-source",
                    },
                    {
                        title: "CLI Tool", value: "cli-tool",
                    },
                    {
                        title: "Desktop App", value: "desktop-app",
                    },
                    {
                        title: "Browser Extension", value: "browser-extension",
                    },
                    {
                        title: "Game", value: "game",
                    },
                    {
                        title: "Other", value: "other",
                    }
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "liveUrl",
            title: "Live URL",
            type: "url",
            description: "Link to the live project",
        }),
        defineField({
            name: "githubUrl",
            title: "GitHub URL",
            type: "url",
            description: "Link to the GitHub repository",
        }),
        defineField({
            name: "featured",
            title: "Featured Project",
            type: "boolean",
            description: "Show this project prominently on the homepage",
            initialValue: false,
        }),
        defineField({
            name: "order",
            title: "Display Order",
            type: "number",
            description: "Lower numbers appear first (0-99)",
            initialValue: 0,
            validation: (Rule) => Rule.min(0).max(99),
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "coverImage",
            category: "category",
            featured: "featured",
        },
        prepare(selection) {
            const { title, media, category, featured } = selection
            return {
                title: title,
                media: media,
                subtitle: `${category} ${featured ? "(Featured)" : ""}`,
            }
        },
    }
})