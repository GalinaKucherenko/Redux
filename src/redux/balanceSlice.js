import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'balance',
    initialState: {
        value: 0,
    },
    reducers: {
        deposit(state, action) {
            state.value += action.payload
         },
        withdraw(state, action) {
            state.value -= action.payload
         },
        reset(state) {
            state.value = 0
         },        
    }
})

export const { deposit, withdraw, reset } = slice.actions;

export default slice.reducer;

// export const deposit = createAction('balance/deposit')

// export const withdraw = createAction('balance/withdraw')

// export const reset = createAction('balance/reset')

// export const balanceReducer = createReducer({ value: 0 }, (builder) => {
//     builder
//         .addCase(deposit, (state, action) => {
//             state.value += action.payload
//          })
//         .addCase(withdraw, (state, action) => {
//             state.value -= action.payload
//          })
//         .addCase(reset, (state) => {
//             state.value = 0
//          });
// })