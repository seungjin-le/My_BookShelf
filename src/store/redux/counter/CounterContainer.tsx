import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import { decrease, increase, increaseBs, increaseBy } from './counter';
import Counter from '../../../components/counter/Counter';

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  const onIncreaseBs = (diff: number) => {
    dispatch(increaseBs(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
      onIncreaseBs={onIncreaseBs}
    />
  );
};

export default CounterContainer;
