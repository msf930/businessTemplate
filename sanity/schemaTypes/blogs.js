import {BookIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'
import { format, parseISO } from 'date-fns'

import { isUniqueSlug } from "@/sanity/lib/isUniqueSlug";

export const blogs = defineType({
    name: 'blogs',
    title: 'Post',
    type: 'document',
    icon: BookIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            description: 'Blog post title',
            validation: rule => rule.required().min(1),
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        defineField({
            name: 'url',
            type: 'slug',
            options: {
                source: 'title',
                isUnique: isUniqueSlug,
            },
            description: 'Once you enter blog title, click generate to make the project URL.',
            validation: rule => rule.required()

        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'tag',
            type: 'string',
            description: 'blog tag',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    description: 'Important for SEO and accessibility. Describe the image for those who cannot see it',
                }
            ]
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Image caption',
                            description: 'Caption displayed below the image.',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessibility.',
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            date: 'date',
        },
        prepare({ title, media, date }) {
            const subtitles = [
                date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
            ].filter(Boolean)

            return { title, media, subtitle: subtitles.join(' ') }
        },
    }
})