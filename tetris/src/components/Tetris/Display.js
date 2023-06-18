import { styled } from "styled-components";

const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => props.gameOver ? 'red' : '#999'};
    background-color: #000;
    font-family: 'WindowsRegular';
    font-size: 1rem;
    white-space: nowrap;
`

const Display = ({ gameOver, text, stat }) => {
    return(
        <StyledDisplay gameOver={gameOver}>{text} {stat}</StyledDisplay>
    );
}

export default Display;