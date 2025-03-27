import {TokenIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

import { isUniqueSlug } from "@/sanity/lib/isUniqueSlug";

export const services = defineType({
    name: 'services',
    title: 'Services',
    type: 'document',
    icon: TokenIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            description: 'Titles should be catchy, descriptive, and not too long',
        }),
        defineField({
            name: 'description',
            type: 'string',
            description: 'Short and sweet, but make sure it\'s descriptive',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                isUnique: isUniqueSlug
            },
            description: 'This is the URL path for the page. Please click "Generate" to create a slug',
            validation: rule => rule.required().min(1).warning('Please generate a slug'),
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
            name: 'body',
            type: 'array',
            of: [{type: 'block'}]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
})