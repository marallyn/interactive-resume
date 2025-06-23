import c from "./constants";

export const initialState = {
  selectedExperience: null,
  selectedSkill: null,
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
