import {CubeIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

import { isUniqueSlug } from "@/sanity/lib/isUniqueSlug";

export const projects = defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    groups: [
        {
            name: 'projectDetails',
            title: 'Project Details',
        },
        {
            name: 'media',
            title: 'Media',
        },
        {
            name: 'content',
            title: 'Content',
        }
    ],
    icon: CubeIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            description: 'Project title',
            group: 'projectDetails',
            validation: rule => rule.required().min(1),
        }),
        defineField({
            name: 'description',
            type: 'string',
            description: 'This is a short description that will show on the project grid, and project page',
            group: 'projectDetails',
        }),
        defineField({
            name: 'url',
            type: 'slug',
            options: {
                source: 'title',
                isUnique: isUniqueSlug,
            },
            description: 'Once you enter project title, click generate to make the project URL.',
            group: 'projectDetails',
            validation: rule => rule.required()

        }),
        defineField({
            name: 'budget',
            type: 'number',
            description: 'Project budget, enter numbers only',
            group: 'projectDetails',
        }),
        defineField({
            name: 'location',
            type: 'string',
            description: 'Project city or neighborhood',
            group: 'projectDetails',
        }),
        defineField({
            name: 'duration',
            type: 'string',
            description: 'Project duration ex: 3 months, 6 weeks, etc.',
            group: 'projectDetails',
        }),
        defineField({
            name: 'tag',
            type: 'string',
            description: 'Project tag',
            group: 'projectDetails',
        }),
        defineField({
            name: 'matterportBefore',
            type: 'string',
            description: 'Matterport Before URL',
            group: 'projectDetails',
        }),
        defineField({
            name: 'matterportAfter',
            type: 'string',
            description: 'Matterport After URL',
            group: 'projectDetails',
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            group: 'media',
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
            name: 'bodyText',
            type: 'array',
            description: 'Project description',
            group: 'content',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'testimonial',
            type: 'string',
            description: 'Client testimonial',
            group: 'content',
        }),
        defineField({
            name: 'testimonialAuthor',
            type: 'string',
            description: 'Client name',
            group: 'content',
        }),
        defineField({
            name: 'imageGallery',
            type: 'array',
            description: 'Add images to the gallery',
            group: 'media',
            of: [{type: 'image', options: {hotspot: true}}],
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
})