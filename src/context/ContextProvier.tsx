import React, { useReducer, useContext, createContext, Dispatch } from 'react';


type State = { isDarkMode: boolean};
type Action =
    { type: 'TOGGLE_THEME' }
type GlobalDispatch = Dispatch<Action>;

const InitialState = {isDarkMode:false}

export const GlobalStateContext = createContext<State>(InitialState);
export const GlobalDispatchContext = createContext<GlobalDispatch|null>(null);

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
                isDarkMode: !state.isDarkMode
            };
        default:
            return {
                ...state
            };
    }
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (
        <GlobalStateContext.Provider value= { state } >
            <GlobalDispatchContext.Provider value={ dispatch }>
                { children }
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};