import "../css/Game.css";

// React
import { useState } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setIsPlayNow } from "../store/IsPlayNow";

// Components
import Tetris from "./Tetris/Tetris";
import RankingPage from "./Rank";

// Sound
import { useBGM } from "../hooks/tetris/useBGM";
import { playSound } from "../hooks/tetris/playSound";



const Game = () => {
    const isPlayNow = useSelector((store) => store.isPlayNow.value);
    const [isStart, setIsStart] = useState(false);
    const dispatch = useDispatch();

    const onClickSingle = () => {
        playSound('/sound/tabSound.wav', 0.2);
        if (isStart === false) {
            setIsStart(true);
        } else {
            setIsStart(false);
            dispatch(setIsPlayNow(false));
        }
    }
    const [isRank, setIsRank] = useState(false);
    const onClickRank = () => {
        playSound('/sound/tabSound.wav', 0.2);
        if (isRank === false) {
            setIsRank(true);
        } else {
            setIsRank(false);
        }
    }

    useBGM('/sound/home.mp3', isPlayNow, 0.2);

    return (
        <div className="Game">
            {isStart ? <Tetris setIsStart={onClickSingle} /> :
                isRank ? <RankingPage setIsRank={onClickRank} /> :

                (<div id="Home">
                    <h1 id="Tetris">TETRIS</h1>
                    <div className="button-list">
                        <button className="btn" onClick={onClickSingle}>Single Play</button>
                        <button className="btn" onClick={onClickRank}>Ranking</button>
                        <button className="btn">Setting</button>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Game;