import {NumberIcon} from '@sanity/icons'
import { defineType} from 'sanity'

export const servicesOrder = defineType({
    name: 'servicesOrder',
    title: 'Services Order',
    type: 'document',
    icon: NumberIcon,
    fields: [
        {
            name: 'services',
            title: 'Services',
            type: 'array',
            description: 'Add service then drag and drop to reorder.  Click publish when done, changes may take a few minutes to appear on the live site.  Refresh the live site to see changes.',
            of: [{ type: 'reference', to: [{ type: 'services' }] }],
        }
    ]
})