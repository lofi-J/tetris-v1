import "../../css/GameOver.css"

import { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";

import axios from 'axios';

import { playSound } from "../../hooks/tetris/playSound";


const GameOver = ({ score, restart, setIsStart }) => {
	const isMute = useSelector((store) => store.isMute.value);
	// Ranking
	const [isRank, setIsRank] = useState(false);

	const inputRef = useRef(null);
	const badWordListRef = useRef([]);
	const [inputValue, setInputValue] = useState(''); // user가 입력한 이름


	useEffect(() => {
		axios.get('/api/badword')
			.then(res => {
				badWordListRef.current = res.data.badWords;
			})
			.catch(err => console.log(err));
	}, [badWordListRef])

	const checkWord = (inputValue) => {
		for (let i = 0; i < badWordListRef.current.badWord.length; i++) {
			if (inputValue.toLowerCase().indexOf(badWordListRef.current.badWord[i]) === -1) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	}


	// 등록 함수
	const postTrain = () => {
		setIsRank(false);
		if (checkWord(inputValue)) {
			axios.post('/api/data', { name: inputValue, score: score })
				.then(response => {
					console.log('성공');
					console.log(`data: ${response.data}`);
					setIsStart();
				})
				.catch(error => {
					console.log('에러!!!');
					console.error(error);
				})
		} else {
			alert('부적절한 닉네임 입니다.');
		}

	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [isRank]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	}
	const onClickSave = () => {
		setIsRank(true);
		playSound('/sound/click.mp3', 0.2);
	}
	useEffect(() => {
		if (!isMute) {
			playSound('/sound/gameOver.wav', 0.2); // game over sound
		}
	}, [isMute]);

	return (
		<div className="gameover-modal">
			<h1>Game Over</h1>

			<span>
				<span>score :</span> <span>{score}</span>
			</span>

			<div className="gameover-modal-buttons">
				<button onClick={restart}>Play Again</button>
				<button onClick={setIsStart}>Main Menu</button>
				{score === 0 ? null :
					!isRank ? <button onClick={onClickSave}>Save Score</button> : (
						<form onSubmit={postTrain} className="input_form">
							<input type="text" required onChange={handleInputChange} ref={inputRef} />
							<button type="submit">Save</button>
						</form>
					)}
			</div>
		</div>
	);
};

export default GameOver;
