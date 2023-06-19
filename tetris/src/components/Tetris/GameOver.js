import "../../css/GameOver.css"

import { useEffect, useRef, useState } from "react"

import axios from 'axios';

import { playSound } from "../../hooks/tetris/playSound";


const GameOver = ({ score, restart, setIsStart }) => {
	// Ranking
	const [isRank, setIsRank] = useState(false);

	const inputRef = useRef(null);
	const [inputValue, setInputValue] = useState('');

	const postTrain = () => {
		setIsRank(false);
		axios.post('/api/data', { name: inputValue, score: score })
			.then(response => {
				console.log('성공');
				console.log(`data: ${response.data}`);
			})
			.catch(error => {
				console.log('에러!!!');
				console.error(error);
			})
	}

	useEffect(() => {
		console.log('click sava score')
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [isRank]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	}
	const onClickSave = () => {
		setIsRank(true);
		playSound('/sound/tabSound/wav', 0.2);
	}
	useEffect(() => {
		playSound('/sound/gameOver.wav', 0.2); // game over sound
	}, [])

	return (
		<div className="gameover-modal">
			<h1>Game Over</h1>

			<span>
				<span>score :</span> <span>{score}</span>
			</span>

			<div className="gameover-modal-buttons">
				<button onClick={restart}>Play Again</button>
				<button onClick={setIsStart}>Main Menu</button>
				{!isRank ? <button onClick={onClickSave}>Save Score</button> : (
					<form onSubmit={postTrain} className="input_form">
						<input type="text" required onChange={handleInputChange} ref={inputRef} />
						<button type="button" onClick={postTrain}>Save</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default GameOver;
