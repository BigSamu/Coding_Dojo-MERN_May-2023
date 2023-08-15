import React, {createContext, useState} from 'react';

// **************************************************
// CONTEXT
// **************************************************
const CounterContext = createContext();

// **************************************************
// PROVIDER (Note that it is exported)
// **************************************************

export const CounterProvider = (props) => {
  // --------------------------------------------------
  // I) HOOKS AND VARIABLES
  // --------------------------------------------------
  const {children} = props;
  const [count, setCount] = useState(0);

  // --------------------------------------------------
  // II) HANDLERS AND AUXILIAR FUNCTIONS
  // --------------------------------------------------

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  // --------------------------------------------------
  // III) CONTEXT VARIABLE
  // --------------------------------------------------
  const context = {
    count,
    increment,
    decrement
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
