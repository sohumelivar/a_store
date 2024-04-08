import counterReducer, { increment, decrement, incrementByAmount } from './model/slice/counterSlice';
import { CounterState } from './model/types/counter';

export {
    counterReducer,
    CounterState,
    increment,
    decrement,
    incrementByAmount,
}