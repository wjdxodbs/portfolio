import styles from "./Experience.module.css";
import SectionHeader from "@/components/common/SectionHeader";
import ExperienceList from "./ExperienceList";
import { categories } from "@/app/_constants/experiences";

function parsePeriodStart(period: string): number {
  const start = period.split(" - ")[0].trim();
  const [year, month = "01"] = start.split(".");
  return parseInt(year) * 100 + parseInt(month);
}

const allItems = categories
  .flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      categoryId: cat.id,
      categoryLabel: cat.label,
    })),
  )
  .sort((a, b) => parsePeriodStart(b.period) - parsePeriodStart(a.period));

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <SectionHeader label="Experience" index="03" />
        <ExperienceList items={allItems} />
      </div>
    </section>
  );
}
