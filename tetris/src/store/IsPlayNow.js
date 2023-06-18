import { createSlice } from "@reduxjs/toolkit";

const IsPlayNow = createSlice({
    name: 'isPlayNow',
    initialState: {value: false},
    reducers: {
        setIsPlayNow(state, action) {
            state.value = action.payload;
        }
    }
})

export const { setIsPlayNow } = IsPlayNow.actions;
export default IsPlayNow;