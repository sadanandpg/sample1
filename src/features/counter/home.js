import apiobject from "./moviesApi"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchAsyncEmployees} from "./counterSlice"
import {
    increment,
    decrement,
    reset,
    incrementByAmount,addEmployee
} from './counterSlice';

const Home = () => {
    const dispatch = useDispatch(); 
    useEffect(() => {
      dispatch(fetchAsyncEmployees());
        //Runs only on the first render
      }, [dispatch]);


    return (  
        <h1>Home</h1>
    );
}
 
export default Home;