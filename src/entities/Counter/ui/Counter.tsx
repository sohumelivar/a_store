import { AppDispatch, RootState } from "app/providers/StoreProvider";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Buton/Button";
import { decrement, increment } from "entities/Counter";
import { Text } from 'shared/ui/Text/Text';

export const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const user = useSelector((state: RootState) => state.user.authData);
    const dispatch: AppDispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
      <div>
        <h1>{count}</h1>
        <Button onClick={handleIncrement} >increment</Button>
        <Button onClick={handleDecrement} >decrement</Button>
        <Text title={'User'} />
        <Text text={user?.id}/>
        <Text text={user?.username}/>
      </div>
    )
};

