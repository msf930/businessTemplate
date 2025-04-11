// https://www.sanity.io/docs/structure-builder-cheat-sheet

import {NumberIcon, ErrorFilledIcon, HomeIcon, UnknownIcon, CogIcon} from '@sanity/icons'
import {instructions} from "@/sanity/schemaTypes/instructions";

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
        // S.listItem()
        //     .title('Instructions')
        //     .icon(ErrorFilledIcon)
        //     .child(
        //         S.document()
        //             .title('Editor Instructions')
        //             .schemaType('instructions')
        //             .documentId('instructions')),
    S.listItem()
        .title('Contact Settings')
        .icon(CogIcon)
        .child(
            S.document()
                .title('Contact Settings')
                .schemaType('contactSettings')
                .documentId('contactSettings')),
        S.listItem()
            .title('Home Page Settings')
            .icon(HomeIcon)
            .child(
                S.document()
                    .title('Home Page Settings')
                    .schemaType('homePage')
                    .documentId('homePage')),
        S.listItem()
            .title('About Page Settings')
            .icon(UnknownIcon)
            .child(
                S.document()
                    .title('About Page Settings')
                    .schemaType('aboutPage')
                    .documentId('aboutPage')),
        S.documentTypeListItem('services').title('Services'),
        S.listItem()
            .title('Services Page Layout')
            .icon(NumberIcon)
            .child(
                S.document()
                    .title('Services Page Layout')
                    .schemaType('servicesOrder')
                    .documentId('servicesOrder')),
        S.documentTypeListItem('projects').title('Projects'),
        S.listItem()
            .title('Projects Page Layout')
            .icon(NumberIcon)
            .child(
                S.document()
                    .title('Projects Page Layout')
                    .schemaType('projectsOrder')
                    .documentId('projectsOrder')),
        // S.listItem()
        //     .title('Settings')
        //     .child(
        //         S.list()
        //             // Sets a title for our new list
        //             .title('Settings Documents')
        //             // Add items to the array
        //             // Each will pull one of our new singletons
        //             .items([
        //
        //                 S.listItem()
        //                     .title('Services Order')
        //                     .icon(NumberIcon)
        //                     .child(
        //                         S.document()
        //                             .title('Services Page Order - add and drag services to reorder')
        //                             .schemaType('servicesOrder')
        //                             .documentId('servicesOrder'))
        //                 ])
        //     ),
        // ...S.documentTypeListItems().filter(listItem => !['servicesOrder', 'instructions', 'services', 'projects', 'projectsOrder'].includes(listItem.getId()))
    ])
