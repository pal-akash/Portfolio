import { cn } from '@/lib/utils';
import type { SKILLS_QUERYResult } from '@/sanity.types';

export const Skills = ({
  category,
  skills,
  index,
}: {
  category: string;
  skills: SKILLS_QUERYResult;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* 🔹 Category title */}
      <div className="text-lg font-bold mb-4 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100 capitalize">
          {category.replace(/-/g, ' ')}
        </span>
      </div>

      {/* 🔹 Skills inside category */}
      <ul className="mt-2 space-y-2 px-10 relative z-10">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
