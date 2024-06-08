import './styles.css';
import { useReducer } from 'react';

interface CounterState {
  count: number;
  error: string | null;
}

interface CounterAction {
  type: 'increment' | 'decrement';
}

const reducer = (state: CounterState, action: CounterAction) => {
  const { type }: CounterAction = action;

  switch (type) {
    case 'increment': {
      const newCount: number = state.count + 1;
      const hasError: boolean = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Counter value can't be more than 5" : null,
      };
    }
    case 'decrement': {
      const newCount: number = state.count - 1;
      const hasError: boolean = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Counter value can't be less than 0" : null,
      };
    }
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const initialState: CounterState = {
    count: 0,
    error: null,
  };

  const [state, dispatch]: [CounterState, React.Dispatch<CounterAction>] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h2>Hello Counter</h2>
      <h1>Count Value: {state.count}</h1>
      <div className="button-container">
        <button onClick={() => dispatch({ type: 'increment' })}>Increment (+)</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement (-)</button>
      </div>
      {state.error && <h1 style={{ color: 'red' }}>{state.error}</h1>}
    </div>
  );
};

export default Counter;
