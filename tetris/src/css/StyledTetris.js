import { styled } from "styled-components";

export const StyledTetrisWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    color: white;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
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

    .backToHome {
        color: #000;
        position: absolute;
        font-size: 1.5rem;
        top: 5vw;
        left: 5vw;
    }
`