import { lifeSections } from "../../data/life";
import LifeSectionCard from "./LifeSectionCard";

function LifeSections() {
  return (
    <section>
      {lifeSections.map((section, index) => (
        <LifeSectionCard
          key={section.id}
          section={section}
          reverse={index % 2 === 1}
        />
      ))}
    </section>
  );
}

export default LifeSections;
