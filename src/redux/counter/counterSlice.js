import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        user: null,
    
    },
    reducers: {
        increaseCount(state){
            state.count= state.count+1;
        },decreaseCount(state){
            state.count= state.count-1;
        },
    },
});

export const { increaseCount, decreaseCount } = counterSlice.actions;
export default counterSlice.reducer;