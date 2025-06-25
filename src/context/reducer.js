import c from "./constants";
import { resumeData } from "../data/resumeData";

const getResumeData = () => {
  const thisYear = new Date().getFullYear();
  const calculateYears = ({ start = null, end = null }) => {
    if (!start && !end) {
      return { label: "none", value: 0 };
    }

    const years = (end || thisYear) - start + 1;
    if (years >= 10) {
      return { label: "10+", value: 10 };
    }

    return { label: `${years}`, value: 10 };
  };

  return {
    ...resumeData,
    skills: resumeData.skills.map((skill) => ({
      ...skill,
      years: calculateYears(skill.years || {}),
    })),
  };
};

export const initialState = {
  selectedExperience: null,
  selectedSkill: null,
  resumeData: getResumeData(),
};

export const reducer = (state, action) => {
  switch (action.type) {
    case c.SELECT_SKILL:
      return {
        ...state,
        selectedSkill:
          state.selectedSkill === action.payload ? null : action.payload,
        selectedExperience: null,
      };
    case c.SELECT_EXPERIENCE:
      return {
        ...state,
        selectedExperience: action.payload,
      };
    default:
      return state;
  }
};
