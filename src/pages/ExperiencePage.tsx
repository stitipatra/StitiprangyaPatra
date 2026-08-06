import ExperienceHero from "../components/experience/ExperienceHero";
import ExperienceSection from "../components/experience/ExperienceSection";
import ExperienceTimelineNav from "../components/experience/ExperienceTimelineNav";
import { experiences } from "../data/experience";

function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <ExperienceTimelineNav />

      {experiences.map((experience, index) => (
        <ExperienceSection
          key={experience.id}
          experience={experience}
          index={index}
        />
      ))}
    </>
  );
}

export default ExperiencePage;
