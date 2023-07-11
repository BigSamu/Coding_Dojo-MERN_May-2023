import React, {useState} from 'react'

const Counter = () => {
  // ---------------------------------------------
  // I) VARIABLES & HOOKS
  // ---------------------------------------------
  const [count, setCount] = useState(0);

  // ---------------------------------------------
  // II) HANDLERS AND AUX FUNCTIONS
  // ---------------------------------------------
  const handleOnClickIncrementCount = (e) => {
    let newCount = count + 1;
    console.log(count, newCount); // 0, 1 first click
    setCount(newCount);
    console.log(count, newCount); // 0, 1 first click
    console.log('-------------------');
  } // Note: setCount do his work here!

  // ---------------------------------------------
  // III) JSX
  // ---------------------------------------------
  return (
    <div className="container w-25 p-4 border border-2 border-secondary rounded bg-light shadow-sm">
      <div className="d-flex flex-column justify-content-center align-items-center">
        {/* Heading */}
        <h1>Counter</h1>

        {/* Count */}
        <p className="mb-4">Count: {count}</p>

        {/* Increment Button */}
        <button className="btn btn-primary" onClick={handleOnClickIncrementCount}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
