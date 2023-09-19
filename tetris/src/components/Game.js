import "../css/Game.css";

// React
import { useState } from "react";


// fontawesome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setIsPlayNow } from "../store/IsPlayNow";
import { setIsMute } from "../store/IsMute";

// Components
import Tetris from "./Tetris/Tetris";
import RankingPage from "./Rank";
import Help from "./Help";

// Sound
import { useBGM } from "../hooks/tetris/useBGM";
import { playSound } from "../hooks/tetris/playSound";



const Game = () => {
    const isPlayNow = useSelector((store) => store.isPlayNow.value);
    const isMute = useSelector((store) => store.isMute.value);
    const [isStart, setIsStart] = useState(false);
    const dispatch = useDispatch();

    const onClickSingle = () => {
        if (!isMute) {
            playSound('/sound/click.mp3', 0.3);
        }
        if (isStart === false) {
            setIsStart(true);
        } else {
            setIsStart(false);
            dispatch(setIsPlayNow(false));
        }
    }
    const [isRank, setIsRank] = useState(false);
    const onClickRank = () => {
        if (!isMute) {
            playSound('/sound/click.mp3', 0.3);
        }
        if (isRank === false) {
            setIsRank(true);
        } else {
            setIsRank(false);
        }
    }


    const onClickHome = () => {
        // Reset States
        setIsStart(false);
        setIsRank(false);
        dispatch(setIsPlayNow(false));
    }

    const onClickToggle = () => {
        if (isMute) {
            dispatch(setIsMute(false));
        } else {
            dispatch(setIsMute(true));
        }
    }

    useBGM('/sound/home.mp3', isPlayNow, 0.2);

    return (
        <div className="Game">
            {isStart ? <Tetris setIsStart={onClickSingle} onClickHome={onClickHome} /> :
                isRank ? <RankingPage onClickHome={onClickHome} setIsRank={onClickRank} /> :

                    (<div id="Home">
                        <h1 id="Tetris">TETRIS</h1>
                        <div className="button-list">
                            <button className="btn" onClick={onClickSingle}>Single Play</button>
                            <button className="btn" onClick={() => alert('현재는 지원하지 않는 기능입니다.')}>Ranking</button>
                            <Help />
                        </div>
                        <FontAwesomeIcon className="volumn-icon" icon={isMute ? faVolumeXmark : faVolumeLow} onClick={onClickToggle} />
                    </div>)
            }
        </div>
    )
}
export default Game;