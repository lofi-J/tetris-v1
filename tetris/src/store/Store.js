import { configureStore } from "@reduxjs/toolkit";
import IsTetris from "./IsTetris";
import IsPlayNow from "./IsPlayNow";
import IsMute from "./IsMute";

const store = configureStore({
    reducer: {
        isTetris: IsTetris.reducer,
        isPlayNow: IsPlayNow.reducer,
        isMute: IsMute.reducer,
    }
})
export default store;