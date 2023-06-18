import { styled } from "styled-components";

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: radial-gradient(rgb(255, 255, 255), rgb(187, 187, 187));
    &:focus{
        outline:none;
        box-shadow:none;
        -webkit-box-shadow:none;
    }
`

export const StyledTetris = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    /* game stats & button */
    aside {
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
`