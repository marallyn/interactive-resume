import { useCallback, useContext } from "react";
import { DispatchContext, StateContext } from "../context/Contexts";
import SkillItem from "./SkillItem";
import c from "../context/constants";
import SkillDetail from "./SkillDetail";

const Skills = () => {
  const dispatch = useContext(DispatchContext);
  const { resumeData, selectedSkill } = useContext(StateContext);
  const skills = resumeData?.skills || null;

  const handleSkillClick = useCallback(
    (skillName) => {
      dispatch({ type: c.SELECT_SKILL, payload: skillName });
    },
    [dispatch]
  );

  if (!skills || !dispatch) {
    return null;
  }

  return (
    <section className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-emerald-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Skills{" "}
        <span className="text-sm text-gray-500">
          click a skill to see details
        </span>
      </h2>
      <SkillDetail />
      <div className="flex flex-wrap justify-center sm:justify-start -m-1">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            onClick={handleSkillClick}
            isActive={skill.name === selectedSkill}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
