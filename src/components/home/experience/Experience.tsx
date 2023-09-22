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
    position: "Apprentice Systems Developer",
    time: "Jan 2023 - Present",
    location: "Campinas, Brazil",
    description:
      "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
    tech: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "Python",
      "Django",
      "Java",
      "Git",
    ],
  },
];
