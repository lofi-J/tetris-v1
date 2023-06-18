import { styled } from "styled-components";

export const StyledTetrisWrapper = styled.div`
    width: 100%;
    height: 100%;
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

    /* game stats & button */
    aside {
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
`