import React, { useReducer } from 'react';
import DisplayReducer from '../reducers/DisplayReducer';

const INITIAL_STATE = {
  value: '0',
  before: null,
  operator: null,
};

const DisplayContext = React.createContext(INITIAL_STATE);

const DisplayContextProvider = ({ children }) => {
  const [displayState, dispatch] = useReducer(DisplayReducer, INITIAL_STATE);

  console.log(displayState);

  return (
    <DisplayContext.Provider
      value={{
        value: displayState.value,
        before: displayState.before,
        operator: displayState.operator,
        dispatch
      }}
    >
      { children }
    </DisplayContext.Provider>
  );
};

export {
  DisplayContext,
  DisplayContextProvider
};