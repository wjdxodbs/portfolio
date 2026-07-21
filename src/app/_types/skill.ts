export const SKILL_CATEGORIES = [
  "Core",
  "Styling",
  "State Management",
] as const;

export type SkillCategory = (typeof SKILL_CATEGORIES)[number];

export interface Skill {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  category: SkillCategory;
  capabilities: string[];
}
