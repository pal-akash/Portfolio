import type { SchemaTypeDefinition } from "sanity";
import certification from "./certification";
import education from "./education";
import experience from "./experience";
import profile from "./profile";
import project from "./project";
import siteSetting from "./siteSetting";
import skill from "./skill";

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
};
