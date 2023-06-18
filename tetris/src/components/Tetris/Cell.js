import React from 'react';

import styled, { css } from 'styled-components';
import { TETROMINOS } from '../../constants';


const Cell = ({ type, isGhost }) => {
    const color = TETROMINOS[type].color;
    return isGhost ? <StyledCell ghost={'true'} type={type} color={color} /> : <StyledCell type={type} color={color} />;
}

// export default Cell;
export default React.memo(Cell);

const StyledCell = styled.div`
    display: inline;
    width: auto;

    
    background-color: rgba(${props => props.color}, 0.6);
    border: 2px solid;
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-right-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 0.3);
    border-radius: 4px;

    /* ${props =>
    props.type === 0 &&
    css`
        background-color: transparent;
    `} */

    ${props =>
    props.ghost &&
    css`
      border-width: 1px;
      border-color: rgba(240, 248, 255, 0.5);
      color: aliceblue;
    `}
`