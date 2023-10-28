import React, { useReducer } from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  opened: {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_NAV_OPENED':
      return {
        ...state,
        opened: {
          ...state.opened,
          [action.url]: !state.opened[action.url]
        }
      };
    default:
      return {
        ...state
      };
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
