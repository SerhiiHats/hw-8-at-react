import React, {useMemo, useState} from 'react';

const ComponentExampleMemoHook = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  const computedFunc = (value) => {
    console.log('render!');
    for (let i = 0; i < 900000000; i++) {
      const b = i * 2;
    }
    return value * 2;
  }

  // const computed = computedFunc(count2);
  const computed = useMemo(() => computedFunc(count2), [count2]);

  return (
    <div>
      <h3>fust count: {count}, slow counter: {computed}</h3>
      <h3>MemoHookExample</h3>
      <button onClick={() => setCount(count + 1)}>
        Click 1
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        Click 2
      </button>
    </div>
  )
}

export default ComponentExampleMemoHook;