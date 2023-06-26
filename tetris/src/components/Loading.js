import React from 'react';

import '../css/Loading.css';


const Loading = () => {
	return (
		<div className="Loading-container">
			<div className="word">LOADING...</div>
			<div className="overlay"></div>
		</div>
	)
}

export default Loading;
