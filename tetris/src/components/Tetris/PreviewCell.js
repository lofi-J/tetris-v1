import React from "react";

import { styled } from "styled-components";


const PreviewCell = ({ filled, color }) => {
    return <StyledPreviewCell color={color} filled={filled ? 1 : 0} />
}

export default PreviewCell;

const StyledPreviewCell = styled.div`
    display: inline;
    width: auto;

    background-color: ${(props) => (props.filled ? `rgba(${props.color}, 0.8)` : 'transparent')};
    border: 1.5px solid;
    border-color: ${(props) => (props.filled ? `#000` : 'transparent')};
    border-radius: 4px;
`