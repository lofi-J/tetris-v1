import React from 'react';

import styled from 'styled-components';
import { TETROMINOS } from '../../constants';


const Cell = ({ type, isGhost }) => {
    const color = TETROMINOS[type].color;
    const border = TETROMINOS[type].border;
    return isGhost ? 
        <StyledCell2 ghost={'true'} type={type} color={color} border={border}><div></div></StyledCell2> :
        <StyledCell1 type={type} color={color} border={border}><div></div></StyledCell1>;
}

// export default Cell;
export default React.memo(Cell);

const StyledCell1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;


    border: 1px solid ${props => props.border};
    border-radius: 2px;

    div {
        width: 70%;
        height: 70%;
        background-color: ${props => props.color};
        border-radius: 2px;
    }
`

const StyledCell2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 2px;
    background-color: transparent;
`