import "../../css/GameOver.css"

import {useEffect, useRef, useState} from "react"

import { useDispatch } from "react-redux";

import { setIsTetris } from "../../store/IsTetris";

import axios from 'axios';


const GameOver = ({ score, restart, setIsStart }) => {
    //Dispath
    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const postTrain = () => {axios.post('/api/data', { name: inputValue, score: score })
    .then(response => {
        // 요청에 대한 응답 처리
        console.log('성공');
        console.log(response.data);
    })
    .catch(error => {
        // 오류 처리
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
    const onClickQuit = () => {
        dispatch(setIsTetris(false));
    }

    return (
      <div className="gameover-modal">
        <h1>Game Over</h1>
        <input ref={inputRef} onChange={handleInputChange} value={inputValue} maxLength="9" placeholder="Nickname"/>
        <button onClick={postTrain}>submit</button>
        <span>
          score : <span>{score}</span>
        </span>
        <div className="gameover-modal-buttons">
          <button onClick={restart}>Play Again</button>
          <button onClick={setIsStart}>Main Menu</button>
          <button onClick={onClickQuit}>Quit</button>
        </div>
      </div>
    );
  };

export default GameOver;
