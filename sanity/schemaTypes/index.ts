import type { SchemaTypeDefinition } from 'sanity'
import profile from './profile'
import project from './project'
import skill from './skill'
import experience from './experience'
import education from './education'
import certification from './certification'
import siteSetting from './siteSetting'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profile,
    project,
    skill,
    experience,
    education,
    // testimonial,
    certification,
    // achievement,
    // blog,
    // service,
    // contact,
    siteSetting,
    // navigation,
  ],
}
