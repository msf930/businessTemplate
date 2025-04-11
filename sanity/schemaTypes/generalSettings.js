import {CogIcon} from '@sanity/icons'

import { defineField, defineType} from 'sanity'

export const generalSettings = defineType({
    name: 'contactSettings',
    title: 'Contact Settings',
    type: 'document',
    icon: CogIcon,
    fields: [
        defineField({
            name: 'logo',
            type: 'image',
            description: 'Upload the logo for the website',
            options: {
                hotspot: true
            },
        }),
        defineField({
            name: 'phoneNumber',
            type: 'number',
            description: 'Enter the contact phone number ex. 1112223333',

        }),
        defineField({
            name: 'email',
            type: 'string',
            description: 'Enter the contact email address',
        }),
        defineField({
            name: 'address',
            type: 'object',
            description: 'Enter the contact address',

            fields: [
                {
                    name: 'street',
                    type: 'string',
                    description: 'Street address',

                },
                {
                    name: 'street2',
                    type: 'string',
                    description: 'Street address Line 2',
                },
                {
                    name: 'city',
                    type: 'string',
                    description: 'City',

                },
                {
                    name: 'state',
                    type: 'string',
                    description: 'State Abbreviation',

                },
                {
                    name: 'zipCode',
                    type: 'number',
                    description: 'Zip Code',

                }
            ]
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'object',
            fields: [
                {
                    name: 'isActive',
                    type: 'boolean',
                    title: 'Is Active',
                    description: 'If on, the link will be visible on the website',
                },
                {
                    name: 'instagramLink',
                    title: 'Instagram Link',
                    type: 'string',
                    description: 'Instagram Link URL, Must start with https://',
                }

            ]
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'object',
            fields: [
                {
                    name: 'isActive',
                    type: 'boolean',
                    title: 'Is Active',
                    description: 'If on, the link will be visible on the website',
                },
                {
                    name: 'facebookLink',
                    title: 'Facebook Link',
                    type: 'string',
                    description: 'Facebook Link URL, Must start with https://',
                }

            ]
        }),



    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
        }
    }
})