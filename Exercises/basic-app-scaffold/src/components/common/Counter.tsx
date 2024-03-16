import { useCounterStore } from '@store';
import { useState } from 'react';

function Counter() {
  const [incrementAmount, setIncrementBy] = useState(1);
  const count = useCounterStore((state) => state.count);
  const incrementBy = useCounterStore((state) => state.incrementBy);

  return (
    <>
      <p>
        This component demonstrates state managment with{' '}
        <a href="https://github.com/pmndrs/zustand" target="_blank" rel="noreferrer">
          Zustand
        </a>
        .
      </p>
      <label htmlFor="incrementAmount">Increment by:</label>
      <input
        id="incrementAmount"
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementBy(+e.target.value)}
      />
      <button onClick={() => incrementBy(incrementAmount)}>Increment</button>

      <div>Count from counter store is : {count}</div>
    </>
  );
}

export default Counter;
