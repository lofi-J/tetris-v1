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

    background-color: ${props => props.color};

    ${props =>
    props.ghost &&
    css`
        border: 1px solid rgba(0, 0, 0, 0.8);
        border-radius: 2px;
        background-color: ${props => props.color};
    `}
`