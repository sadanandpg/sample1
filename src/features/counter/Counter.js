import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';

import {
    increment1,
    decrement1,
    reset1,
    incrementByAmount1
} from './counterSlice1';

import {
    AppDispatch,
    AppDispatch1,
    
} from '../../app/store';

import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter1.count);
    const counter=useSelector((state) => state.counter1.Counter);
    const count1 = useSelector((state) => state.counter2.count);
    //const counter1=useSelector((state) => state.counter2.Counter);
    const dispatch = useDispatch();   
    //const dispatch1 = useDispatch<typeof state.counter1>()

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count} and {count1}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>

                {/* <button onClick={() => dispatch(increment1())}>from second +</button> */}
            </div>

            <input
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount({id:addValue}))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}
export default Counter