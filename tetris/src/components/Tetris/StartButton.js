import { styled } from "styled-components";

const StartButton = ({ callback, isPlaying }) => {
    return <StyledButton onClick={callback}>{isPlaying ? "Re Start" : "START"}</StyledButton>
}

export default StartButton;


const StyledButton = styled.button`
    font-family: 'WindowsRegular';
    box-sizing: border-box;
    margin: 0 0 20px 0;
    margin-bottom: 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    border: none;
    color: white;
    background-color: #333;
    font-size: 1rem;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
`