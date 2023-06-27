import React from 'react';

import styled from 'styled-components';
import { TETROMINOS } from '../../constants';


const Cell = ({ type, isGhost }) => {
    const color = TETROMINOS[type].color;
    const border = TETROMINOS[type].border;
    return isGhost ? 
        <StyledCell2 ghost={'true'} color={color} border={border}></StyledCell2> :
        <StyledCell1 type={type} color={color} border={border}></StyledCell1>;
}

// export default Cell;
export default React.memo(Cell);

// 고스트 블럭이 아닌 블럭들(일반 배경 그리드 포함)
const StyledCell1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;


    border: 2px solid ${props => props.border};
    border-radius: 2px;
    background: radial-gradient(${props => props.color}, ${props => props.border});
`

// 고스트 블럭
const StyledCell2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    border: 1.5px solid rgba(0, 0, 0, 0.5);
    border: 1.5px solid black;
    border-radius: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`