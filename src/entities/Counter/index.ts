import counterReducer, { increment, decrement, incrementByAmount } from './model/slice/counterSlice';
import { CounterState } from './model/types/CounterSchema';

export {
    counterReducer,
    CounterState,
    increment,
    decrement,
    incrementByAmount,
}