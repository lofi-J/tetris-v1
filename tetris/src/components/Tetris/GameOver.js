import "../../css/GameOver.css"

import {useEffect, useRef, useState} from "react"

import axios from 'axios';

import { clickSound } from "../../hooks/tetris/useClickSound";


const GameOver = ({ score, restart, setIsStart }) => {
    // Ranking
    const [isRank, setIsRank] = useState(false);

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    const postTrain = () => {axios.post('/api/data', { name: inputValue, score: score })
    .then(response => {
        console.log('성공');
        console.log(response.data);
    })
    .catch(error => {
        console.log('에러!!!');
        console.error(error);
    })}
    
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onClickSave = () => {
        setIsRank(true);
        clickSound(0.2);
    }

    return (
      <div className="gameover-modal">
        <h1>Game Over</h1>
        
        <span>
          <span>score :</span> <span>{score}</span>
        </span>
        <div className="gameover-modal-buttons">
          <button onClick={restart}>Play Again</button>
          <button onClick={setIsStart}>Main Menu</button>
          {!isRank ? <button onClick={onClickSave}>Sava Ranking</button> : (
              <div>
                  <input ref={inputRef} onChange={handleInputChange} value={inputValue} maxLength="9" placeholder="Nickname"/>
                  <button onClick={postTrain}>save</button>
              </div>
          )}
        </div>
      </div>
    );
  };

export default GameOver;
