import { createSlice } from "@reduxjs/toolkit";

const IsStart = createSlice({
    name: 'isStart',
    initialState: {value: false},
    reducers: {
        setIsStart(state, action) {
            state.value = action.payload;
        }
    }
})

export const {setIsStart} = IsStart.actions;
export default IsStart;