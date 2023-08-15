import React, {createContext, useReducer} from 'react';

// **************************************************
// CONTEXT
// **************************************************
const CounterContext = createContext();

// **************************************************
// REDUCER
// **************************************************

const initialState = { count: 0 };


const counterReducer = (state, action) => {
  
  switch(action.type){
    case "INCREMENT":
      return {count: state.count + 1, message: "Incremented!!"};
    case "DECREMENT":
      return {count: state.count - 1, message: "Decremented!!"};
    default:
      return state
  }
}
// **************************************************
// PROVIDER (Note that it is exported)
// **************************************************

export const CounterProvider = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const {children} = props;
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // --------------------------------------------------
  // III) CONTEXT VARIABLE
  // --------------------------------------------------
  const context = {
    state,
    dispatch
  }

  // --------------------------------------------------
  // III) JSX
  // --------------------------------------------------
  return (
    <CounterContext.Provider value={context}>
      {children}
    </CounterContext.Provider>
  )
}

// **************************************************
// EXPORT CONTEXT
// **************************************************
export default CounterContext;
