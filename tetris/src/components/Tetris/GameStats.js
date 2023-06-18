const GameStats = ({level, line, score}) => {
    return(
        <div className="game-stats">
            <div className="stats-title">
                <div>LEVEL:</div>
                <div>LINE:</div>
                <div>SCORE:</div>
            </div>
            <div className="stats-point">
                <div>{level}</div>
                <div>{line}</div>
                <div>{score}</div>
            </div>
        </div>
    );
}

export default GameStats;