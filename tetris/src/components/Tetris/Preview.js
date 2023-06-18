import { styled } from "styled-components";

import React from "react";
import { useEffect, useRef } from "react";

import PreviewCell from "./PreviewCell";
import { TETROMINOS } from "../../constants";


const Preview = ({queue}) => {
    const grid = Array.from({length: 4}, () => new Array(4).fill(0));

    const shapeRef = useRef(0);

    useEffect(() => {
        if(queue.isEmpty()) {
            queue.init();
        }
        shapeRef.current = queue.items[queue.items.length-1];
    }, [queue, queue.items.length]);


    const arr = TETROMINOS[shapeRef.current].shape;
    const color = TETROMINOS[shapeRef.current].color;
    return (
        arr.length < 1 ? null : 
        <StyledPreview>
            {grid.map((row, x) =>
                row.map((cell, y) => {
                    const isFilled = arr[x] && arr[x][y] !== 0;
                    return <PreviewCell key={`${x}-${y}`} filled={isFilled} color={color} />;
                })
            )}
        </StyledPreview>
    );
}

export default Preview;

const StyledPreview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    box-sizing: content-box;
    background-color: transparent;
    width: 100px;
    height: 100px;
    /* border: 2px solid #111; */
`