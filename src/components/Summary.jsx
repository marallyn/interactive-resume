import { useContext } from "react";
import { StateContext } from "../context/Contexts";

const Summary = () => {
  const { resumeData } = useContext(StateContext);
  const summary = resumeData?.summary || null;

  if (!summary) {
    return null;
  }

  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-indigo-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">
        Summary
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">{summary}</p>
    </section>
  );
};

export default Summary;
