import { styled } from "styled-components";

const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    background-color: transparent;
    color: #000;
    font-size: 1rem;
    white-space: nowrap;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Display = ({ gameOver, text, stat }) => {
    return(
        <StyledDisplay gameOver={gameOver}>{text} {stat}</StyledDisplay>
    );
}

export default Display;