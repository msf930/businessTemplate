import {HomeIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

import { isUniqueSlug } from "@/sanity/lib/isUniqueSlug";

export const homePage = defineType({
    name: 'homePage',
    title: 'HomePage',
    type: 'document',
    icon: HomeIcon,
    fields: [
        defineField({
            name: 'heroImage',
            type: 'image',
            options: {
                hotspot: true,
                metadata: ['blurhash']
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
            name: 'section2',
            type: 'object',
            description: 'settings for section 2 of the homepage',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false, // Defines if the fieldset should be collapsed by default or not
            },
            fieldsets: [{name: 'section2', title: 'Section 2 settings'}],

        fields: [
            {
                name: 'section2Image',
                type: 'image',
                options: {
                    hotspot: true,
                    metadata: ['blurhash']
                },
                fields: [
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                        description: 'Important for SEO and accessibility. Describe the image for those who cannot see it',
                    }
                ]
            },
            {
                name: 'section2Title',
                type: 'string',
                description: 'Title for section 2 of the homepage',
            },
            {
                name: 'section2Description',
                type: 'string',
                description: 'This is a short description that will show on section 2 of the homepage',
            },
    ]}),
        defineField({
            name: 'whyUsItems',
            type: 'array',
            description: 'Why us items list.  Max - 5 items',
            of: [
                {
                    type: 'object',
                    name: 'whyUsItem',
                    title: 'Why Us Item',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        },
                        {
                            name: 'description',
                            type: 'string',
                            title: 'Description',
                        },
                    ]
                }
            ],
            validation: rule => rule.max(5)
        }),
        defineField({
            name: 'services',
            title: 'Services',
            type: 'array',
            description: 'Add service then drag and drop to reorder. Max - 3 items',
            of: [
                    {
                        type: 'object',
                        name: 'serviceItem',
                        title: 'Service Item',
                        fields: [
                            {
                                name: 'serviceRef',
                                title: 'Service Item',
                                type: 'reference',
                                to: [{type: 'services'}],
                                validation: rule => rule.required(),
                            },
                            {
                                name: 'serviceTitle',
                                type: 'string',
                                title: 'Service Title',
                                validation: rule => rule.required(),
                            },
                            {
                                name: 'serviceImage',
                                type: 'image',
                                options: {
                                    hotspot: true,
                                    metadata: ['blurhash']
                                },
                                title: 'Service Image',
                                validation: rule => rule.required(),
                            }
                        ]
                    },

                ],
            validation: rule => rule.max(3)
        }),
        defineField({
            name: 'testimonialList',
            type: 'array',
            description: 'Testimonial items list.  Max - 3 items',
            of: [
                {
                    type: 'object',
                    name: 'testimonialItem',
                    title: 'Testimonial Item',
                    fields: [
                        {
                            name: 'testimonial',
                            type: 'string',
                            title: 'Testimonial',
                        },
                        {
                            name: 'author',
                            type: 'string',
                            title: 'Author',
                        },
                    ]
                }
            ],
            validation: rule => rule.max(3)
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
})