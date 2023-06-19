import { styled } from "styled-components";

const StartButton = ({ callback, isPlaying }) => {
    return <StyledButton onClick={callback}>{isPlaying ? "Re Start" : "START"}</StyledButton>
}

export default StartButton;


const StyledButton = styled.button`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 30px;
    width: max-content;
    color: #000;
    background-color: transparent;
    font-size: 1rem;
    outline: none;
    border: 2px solid #000;
    text-align: left;
    cursor: pointer;
    &:hover {
        border: 2px solid transparent;
        color: #fff;
        background-color: #000;
    }
`