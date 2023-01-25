import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import counterReducer1 from '../features/counter/counterSlice1';

export const store = configureStore({
    reducer: {
        counter1: counterReducer,
        counter2:counterReducer1
    }
})

export const {AppDispatch,AppDispatch1} =  store.dispatch;