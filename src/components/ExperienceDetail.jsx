import { useContext } from "react";
import { StateContext } from "../context/Contexts";

const ExperienceDetail = ({ experience }) => {
  const { selectedExperience } = useContext(StateContext);
  return (
    <div
      id={`experience-${experience.id}`} // Important for internal linking
      className={`
              p-5 border border-gray-200 rounded-lg transition-all duration-300
              ${selectedExperience === experience.id ? "bg-blue-50 shadow-lg ring-2 ring-blue-400" : "bg-gray-50 hover:shadow-md"}
             
            `}
    >
      {experience.title && (
        <h3 className="text-2xl font-semibold text-blue-700 mb-1">
          {experience.title}
        </h3>
      )}
      {experience.titles &&
        experience.titles.map((title) => (
          <h3 className="text-2xl font-semibold text-blue-700 mb-1">
            {title.title}
            <span className="text-sm font-normal text-black">
              {` ${title.years}`}
            </span>
          </h3>
        ))}
      {experience.company && (
        <p className="text-lg text-gray-800 mb-1">{experience.company}</p>
      )}
      <p className="text-sm text-gray-600 mb-3">{experience.years}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
      {experience.skillsUsed && experience.skillsUsed.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-600 font-medium">Skills Used:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {experience.skillsUsed.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetail;
