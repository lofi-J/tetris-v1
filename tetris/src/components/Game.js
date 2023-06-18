import "../css/Game.css";

// React
import { useEffect, useState } from "react";

// Components
import Tetris from "./Tetris/Tetris";
import RankingPage from "./Rank";



const Game = () => {

    const [isStart, setIsStart] = useState(false);
    const onClickSingle = () => {
        if(isStart === false){
            setIsStart(true);
        }else{
            setIsStart(false);
        }
    }
    const [isRank, setIsRank] = useState(false);
    const onClickRank = () => {
        if(isRank === false){
            setIsRank(true);
        }else{
            setIsRank(false);
        }
    }
    

    return(
        <div className="Game">
            {isStart ? <Tetris setIsStart ={onClickSingle}/> : 
            isRank ? <RankingPage setIsRank={onClickRank}/> :
            (<div id="Home">
                <h1 id="Tetris">TETRIS</h1>
                <div className="button-list">
                    <button onClick={onClickSingle}>Single Play</button>
                    <button onClick={onClickRank}>Ranking</button>
                    <button>Setting</button>
                </div>
            </div>)}
        </div>
    )
}
export default Game;