import {UnknownIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

import { isUniqueSlug } from "@/sanity/lib/isUniqueSlug";

export const aboutPage = defineType({
    name: 'aboutPage',
    title: 'AboutPage',
    type: 'document',
    icon: UnknownIcon,
    fields: [
        defineField({
            name: 'headerDescription',
            type: 'text',
            description: 'About page header description',
            validation: rule => rule.required().min(1),
        }),
        defineField({
            name: 'heroImage',
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
            name: 'whoWeAre',
            type: 'object',
            description: 'settings for the "Who we are" section of the about page',
            options: {
                collapsible: true, // Makes the whole fieldset collapsible
                collapsed: false, // Defines if the fieldset should be collapsed by default or not
            },
            fieldsets: [{name: 'whoWeAre', title: 'Who we are settings'}],

            fields: [
                {
                    name: 'whoWeAreTeam',
                    type: 'array',
                    description: 'Who we are team members.  Remove all team members to hide section.',
                    of: [
                        {
                            type: 'object',
                            name: 'teamItem',
                            title: 'Team Member Profile',
                            fields: [
                                {
                                    name: 'teamMemberImage',
                                    type: 'image',
                                    title: 'Team Member Image',
                                },
                                {
                                    name: 'name',
                                    type: 'string',
                                    title: 'Member Name',
                                },
                                {
                                    name: 'memberTitle',
                                    type: 'string',
                                    title: 'Member Title',
                                },
                                {
                                    name: 'memberBio',
                                    type: 'text',
                                    title: 'Member Bio',
                                },
                            ]
                        }
                    ],

                },
                {
                    name: 'whoWeAreText',
                    type: 'text',
                    description: 'Text for the "Who We Are" section of the About page',
                }
            ]}),
        defineField({
            name: 'aboutPageGrid',
            type: 'array',
            description: 'Why us items list.  Max - 4 items',
            of: [
                {
                    type: 'object',
                    name: 'aboutUsItem',
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
                        {
                            name: 'image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                            title: 'Image',
                        }
                    ]
                }
            ],
            validation: rule => rule.max(4)
        }),
        defineField({
            name: 'bottomText',
            title: 'Bottom Text Title',
            type: 'string',
        }),
        defineField({
            name: 'bottomTextBody',
            type: 'text',
            title: 'Bottom Text Body',
        })

    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
})