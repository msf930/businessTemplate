import {NumberIcon} from '@sanity/icons'
import { defineType} from 'sanity'

export const projectsOrder = defineType({
    name: 'projectsOrder',
    title: 'Projects Order',
    type: 'document',
    icon: NumberIcon,
    fields: [
        {
            name: 'projects',
            title: 'Projects',
            type: 'array',
            description: 'Add project to list then drag and drop to reorder.  Click publish when done, changes may take a few minutes to appear on the live site.  Refresh the live site to see changes.',
            of: [{ type: 'reference', to: [{ type: 'projects' }] }],
        }
    ]
})