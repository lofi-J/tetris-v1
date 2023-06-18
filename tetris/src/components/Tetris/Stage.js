import { styled } from "styled-components";

import Cell from "./Cell";

const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(20, 1fr);
    grid-template-columns: repeat(10, 1fr);
    
    box-sizing: content-box;
    border: 4px solid #000;
    border-top: none;
    border-radius: 2px;
    
    width: 300px;
    height: 600px;
    background-color: transparent;
    

    /* 우측 게임 스탯창 및 start 버튼과의 거리 조절 */
    margin-right: 10%;
`

const Stage = ({ stage, ghostPos }) => {
    return(
        <StyledStage>
            {stage.map((row, y) => row.map((cell, x) => {
                const isGhost = ghostPos.some(pos => pos.x === x && pos.y === y);
                return <Cell key={x} type={cell[0]} isGhost={isGhost} />
            }))}
        </StyledStage>
    );
}

export default Stage;