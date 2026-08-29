export type CategoryType = "career" | "education" | "certificate" | "award";

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface CategoryData {
  id: CategoryType;
  label: string;
  items: ExperienceItem[];
}
