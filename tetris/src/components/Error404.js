import React from 'react'

import styled from "styled-components";

const StyledError404 = styled.div`
    background: radial-gradient(rgb(255, 255, 255), rgb(187, 187, 187));
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2;
    button {
        margin-top: 3rem;
        background-color: transparent;
        outline: none;
        border: none;
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
`

export default function Error404({onClickHome}) {
  return (
    <StyledError404>
        <p>데이터를 가져오는 중 문제가 발생했습니다.</p>
        <p>불편을 드려 죄송합니다.</p>
        <button onClick={onClickHome}>메인화면으로 이동</button>
    </StyledError404>
  )
}
