import { useContext } from "react";
import { StateContext } from "../context/Contexts";
import ExperienceDetail from "./ExperienceDetail";

const Experiences = ({ level }) => {
  const { resumeData } = useContext(StateContext);
  const experiences =
    resumeData?.experiences.filter(
      (experience) => experience.level === level
    ) || null;

  if (!experiences) {
    return null;
  }

  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Experience ({level})
      </h2>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExperienceDetail key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
