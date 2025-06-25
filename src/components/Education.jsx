import { useContext } from "react";
import { StateContext } from "../context/Contexts";

const Education = () => {
  const { resumeData } = useContext(StateContext);
  const education = resumeData?.education || null;

  if (!education) {
    return null;
  }

  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-purple-700">
              {edu.degree} in {edu.major}
            </h3>

            <p className="text-lg text-gray-800">
              <a
                href={`${edu.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {edu.institution}
              </a>
            </p>

            {edu.years && <p className="text-sm text-gray-600">{edu.years}</p>}
            {edu.note && <p className="text-sm text-gray-600">{edu.note}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
