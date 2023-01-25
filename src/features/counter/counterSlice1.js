import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Counter:[],
    count: 0
}
let lastid=0;
export const counterSlice = createSlice({
    name: 'counter1001',
    initialState,
    reducers: {
        increment1: (state) => {
            
            state.count += 1
            state.Counter.push({id:state.count,value:1})
           
            
        },
        decrement1: (state) => {
            state.count -= 1;
        },
        reset1: (state) => {
            state.count = 0;
        },
        incrementByAmount1: (state, action) => {
            state.count += action.payload.id;
        }
    }
});

export const { increment1, decrement1, reset1, incrementByAmount1 } = counterSlice.actions;

export default counterSlice.reducer;

//for lab

// const initialState = {
//     count: 0
// }

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.count += 1;
//         },
//         decrement: (state) => {
//             state.count -= 1;
//         }
        
//     }
// });

// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

