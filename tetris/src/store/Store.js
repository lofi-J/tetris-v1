import { configureStore } from "@reduxjs/toolkit";
import IsTetris from "./IsTetris";
import IsPlayNow from "./IsPlayNow";

const store = configureStore({
    reducer: {
        isTetris: IsTetris.reducer,
        isPlayNow: IsPlayNow.reducer,
    }
})
export default store;