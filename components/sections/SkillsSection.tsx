import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';
import { Skills } from '../Skills';
import type { SKILLS_QUERYResult } from '@/sanity.types';

const SKILLS_QUERY =
  defineQuery(`*[_type == "skill"] | order(category asc, order asc){
    name,
    category,
    icon,
    }`);

async function SkillsSection() {
  const { data: skills } = await sanityFetch({ query: SKILLS_QUERY });

  if (!skills || skills.length === 0) {
    return null;
  }

  const groupedSkills = new Map<string, SKILLS_QUERYResult>();

  for (const skill of skills) {
    const category = skill.category || 'uncategorized';
    const existing = groupedSkills.get(category) || [];
    groupedSkills.set(category, [...existing, skill]);
  }

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A overview of my technical skills and the tools I work with daily
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {Array.from(groupedSkills.entries()).map(
            ([category, categorySkills]) => {
              if (!categorySkills || categorySkills.length === 0) {
                return null;
              }
              return (
                <Skills
                  key={category}
                  index={0}
                  category={category}
                  skills={categorySkills}
                />
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
