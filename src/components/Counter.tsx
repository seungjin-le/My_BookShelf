import { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

const Counter = () => {
  const reducer = (state: number, action: Action): number => {
    switch (action.type) {
      case 'INCREASE':
        return state + 1;
      case 'DECREASE':
        return state - 1;
      default:
        throw new Error('Unhanndled action');
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>-1</button>
        <button onClick={onDecrease}>+1</button>
      </div>
    </div>
  );
};

export default Counter;
