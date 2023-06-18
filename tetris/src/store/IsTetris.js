import { createSlice } from "@reduxjs/toolkit";

const IsTetris = createSlice({
    name: 'isTetris',
    initialState: {value: false},
    reducers: {
        setIsTetris(state, action) {
            state.value = action.payload;
        }
    }
})

export const {setIsTetris} = IsTetris.actions;
export default IsTetris;