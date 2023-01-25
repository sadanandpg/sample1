import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount
} from './counterSlice';
import { useState } from "react";

const Display = () => {
    const count = useSelector((state) => state.counter1.count);
    const counter =useSelector((state) => state.counter1.Counter);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
            <ul>
                {
                counter.map(c => <li key={c.id} id={c.id} value={c.value}>{c.id} </li>)
            
                }
             </ul>
            </div>
        </section>
    )
}
export default Display