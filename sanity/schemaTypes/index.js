import {services} from './services'
import {servicesOrder} from "./servicesOrder";
import {instructions} from "./instructions";
import { projects } from './projects'
import {projectsOrder} from './projectsOrder'
import { homePage } from './homePage'
import { aboutPage } from './aboutPage'

export const schema = {
  types: [services, projects, projectsOrder, servicesOrder, aboutPage, homePage, instructions],
}
