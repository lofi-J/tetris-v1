import React from "react";

import { styled } from "styled-components";


const PreviewCell = ({ filled, color, x, y }) => {
    return <StyledPreviewCell color={color} filled={filled} />
}

export default PreviewCell;

const StyledPreviewCell = styled.div`
    display: inline;
    width: auto;

    background-color: ${(props) => (props.filled ? `rgba(${props.color}, 0.8)` : 'transparent')};
    border: 1px solid;
    border-color: ${(props) => (props.filled ? `aliceblue` : 'transparent')};
    border-radius: 4px;
`