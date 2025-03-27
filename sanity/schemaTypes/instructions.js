import {ErrorFilledIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const instructions = defineType({
    name: 'instructions',
    title: 'Instructions',
    type: 'document',
    icon: ErrorFilledIcon,
    fields: [
        defineField({
            name: 'Services_Page',
            type: 'document',
            description: 'To add items to Services page: ',
            fields: [
                {
                    name: 'Step1AddService',
                    type: 'boolean',
                    description: '1. Click "Services" in the left column, then click the "+" button at the top, fill out the form, and click "Publish" in the bottom right to save.',
                },
                {
                    name: 'Step2',
                    type: 'boolean',
                    description: '2. For service to appear on the live site you must add the service to the "Service Order" tab to the left. In "Services Order", click "+ Add item", select your new service, then drag and drop service to reorder.  Click "Publish" in the bottom right to save.',
                },
                {
                    name: 'Delete',
                    type: 'boolean',
                    description: 'To delete a service, first remove the service from the "Services Order" tab to the left. In the "Services Order" page, click the dots (...) next to the service you want to remove and click "Remove". Next, click "Services" in the left column and choose the service you want to delete in the middle column.  In the bottom right click the three dots (...) and choose "Delete".',
                }
            ]
        }),
    ]
})