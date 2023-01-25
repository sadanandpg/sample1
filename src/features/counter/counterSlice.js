import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import apiobject from "./moviesApi"

const initialState = {
    Counter:[],
    count: 0
}

export const fetchAsyncEmployees = createAsyncThunk(
    "counter100/fetchAsyncEmployees",
    async () => {
        
        const response= await apiobject.get();
        
        return response.data.employees;
      }
    
  );
let lastid=0;
export const counterSlice = createSlice({
    name: 'counter100',
    initialState,
    reducers: {
        increment: (state) => {
            
            state.count += 1
            state.Counter.push({id:3,name:"XYZ"})
           
            
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload.id;
        },
        addEmployee: (state, action) => {
            state.Counter = action.payload;
        }

    },
    extraReducers: {
        [fetchAsyncEmployees.pending]: () => {
            console.log("Pending");
          },
          [fetchAsyncEmployees.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, Counter: payload };
          },
          [fetchAsyncEmployees.rejected]: () => {
            console.log("Rejected!");
          }
    }
});

export const { increment, decrement, reset, incrementByAmount,addEmployee } = counterSlice.actions;

export default counterSlice.reducer;
export const getemployees = (state) => state.counter1.count;

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

