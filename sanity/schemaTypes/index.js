import {services} from './services'
import {servicesOrder} from "./servicesOrder";
import {instructions} from "./instructions";
import { projects } from './projects'
import {projectsOrder} from './projectsOrder'
import { homePage } from './homePage'
import { aboutPage } from './aboutPage'
import {generalSettings} from "@/sanity/schemaTypes/generalSettings";

export const schema = {
  types: [services, projects, projectsOrder, servicesOrder, aboutPage, homePage, generalSettings, instructions],
}
