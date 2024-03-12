import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Robert Bosch GmbH",
    position: "Digital Solutions",
    time: "Jan 2023 - Present",
    location: "Campinas, Brazil",
    description:
      "I work on addressing systems-related challenges, developing innovative digital solutions, which often involve simplifying processes through automation or digital transformation.",
    tech: [
      "TypeScript",
      "Next.js",
      "React Native",
      "Python",
      "Django",
      "Java",
      "Spring",
      "Git",
    ],
  },
];
