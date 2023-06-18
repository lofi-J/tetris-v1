import { configureStore } from "@reduxjs/toolkit";
import IsTetris from "./IsTetris";
import IsStart from "./IsStart";

const store = configureStore({
    reducer: {
        isTetris: IsTetris.reducer,
        isStart: IsStart.reducer,
    }
})
export default store;