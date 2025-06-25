import { useReducer } from "react";
import { DispatchContext, StateContext } from "./Contexts";
import { initialState, reducer } from "./reducer";

const ResumeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>{children}</DispatchContext>
    </StateContext>
  );
};

export default ResumeProvider;
