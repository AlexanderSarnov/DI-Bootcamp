import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++; // or state.count+=1
        },
        decrement: (state, action) => {
            state.count--; // or state.count-=1
        },
        reset: (state, action) => {
            state.count = initialState.count; // or state.count=0 to reset to 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
        incrementByArray: (state, action) => {
            state.count += action.payload.reduce((sum, num) => sum + num, 0);
        },
        incrementWithPrepare: {
            reducer(state, action) {
                console.log(action);
            },
            prepare(num1, num2) {
                return { payload: num1 + num2 };
            },
        },
    },
});

// Correctly destructure from counterSlice.actions
export const { increment, decrement, reset, incrementByAmount, incrementByArray } = counterSlice.actions;
export default counterSlice.reducer;
