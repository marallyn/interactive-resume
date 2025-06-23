import { useReducer } from "react";
import { DispatchContext, StateContext } from "./Contexts";
import { initialState, reducer } from "./reducer";
import { resumeData } from "../data/resumeData";

const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext value={{ ...state, resumeData }}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </StateContext>
  );
};

export default ResumeProvider;
