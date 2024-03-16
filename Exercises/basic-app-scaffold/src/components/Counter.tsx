import { useCounterStore } from '@stores/counterStore';
import { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { appRoles } from '@config/authConfig';
import AuthorizeView from '@components/auth/AuthorizeView.tsx';

function Counter() {
  const [incrementAmount, setIncrementBy] = useState(1);
  const count = useCounterStore((state) => state.count);
  const incrementBy = useCounterStore((state) => state.incrementBy);
  const authContext = useAuth();

  return (
    <AuthorizeView role={appRoles.counterView}>
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
      <button disabled={!authContext.hasRole(appRoles.counterClick)} onClick={() => incrementBy(incrementAmount)}>
        Increment
      </button>

      <div>Count from counter store is : {count}</div>
    </AuthorizeView>
  );
}

export default Counter;
