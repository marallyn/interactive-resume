import { useContext, useEffect, useState } from "react";
import { slugify } from "../utils/string";
import { StateContext } from "../context/Contexts";

const SkillDetail = ({ skill }) => {
  const { resumeData } = useContext(StateContext);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAnimatingIn(true);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      setIsAnimatingIn(false);
    };
  }, [skill]);

  const relatedExperiences = skill.relatedExperienceIds?.map(
    (expId) => resumeData.experiences.find((exp) => exp.id === expId) || []
  );

  return (
    <div
      className={`
        w-full my-6 p-6 bg-indigo-50 rounded-lg shadow-inner border border-indigo-200
        transition-all duration-500 ease-out transform
        ${isAnimatingIn ? "opacity-100 scale-100" : "opacity-0  scale-50"}
      `}
    >
      <h3 className="text-2xl font-semibold text-indigo-800 mb-3">
        {skill.name} Details
      </h3>
      {skill.versions && skill.versions.length > 0 && (
        <p className="text-gray-700 mb-2">
          <strong className="text-indigo-600">Versions:</strong>{" "}
          {skill.versions?.join(", ")}
        </p>
      )}
      <p className="text-gray-700 leading-relaxed">{skill.description}</p>
      {relatedExperiences.length > 0 && (
        <>
          <h4 className="text-xl font-semibold text-indigo-700 mt-4 mb-2">
            Used in:
          </h4>
          <ul className="list-disc list-inside space-y-1">
            {relatedExperiences.map((exp) => (
              <li key={exp.id} className="text-gray-700">
                <a
                  href={`#${slugify(`experience-${exp.id}`)}`}
                  className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors duration-200"
                >
                  {exp.title} at {exp.company} ({exp.years})
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SkillDetail;
