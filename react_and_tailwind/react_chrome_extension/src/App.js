import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-blue-500 mt-3">{count}</h1>
      <div>
        <button
          className="btn bg-red-500 hover:bg-red-700"
          onClick={handleSubtract}
        >
          -
        </button>
        <button
          className="btn bg-blue-500 hover:bg-blue-700"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <button
        className="btn bg-gray-500 hover:bg-gray-700"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
}

export default App;
