import React, { useState } from 'react';

const Controls = ({ onBook, onReset, onRandom }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="controls">
      <input type="number" min="1" max="5" value={count} onChange={e => setCount(e.target.value)} />
      <button onClick={() => onBook(Number(count))}>Book</button>
      <button onClick={onRandom}>Random Occupancy</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Controls;