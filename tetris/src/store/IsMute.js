import { createSlice } from "@reduxjs/toolkit";

const IsMute = createSlice({
    name: 'isMute',
    initialState: {value: true},
    reducers: {
        setIsMute(state, action) {
            state.value = action.payload;
        }
    }
})

export const { setIsMute } = IsMute.actions;
export default IsMute;