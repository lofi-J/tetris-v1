import "../css/Rank.css";
import { styled } from 'styled-components';

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import Loading from "./Loading";
import Error404 from "./Error404";



const RankingPage = ({onClickHome}) => {
    //DB 데이터 가져오기
    const fetchedDataFromDB = async () => {
        try {
            const res = await axios.get('/api/ranking');
            const data = res.data;
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
    const [list, setList] = useState([]);
    useEffect(() => { fetchedDataFromDB().then(data => setList(data))}, []);
    if(list === undefined) return <Error404 onClickHome={onClickHome} />
    if(list.length < 1) return <Loading />

    return(
        <StyledTable>
            <table>
                <th>RANK</th>
                <th>PLAYER</th>
                <th>SCORE</th>
                <th>DATE</th>

                {list.map((e, index) => {
                    return (
                        <tr> 
                            <td>{index+1}</td>
                            <td>{e.name}</td>
                            <td>{e.score}</td>
                            <td>{e.created.slice(0, 10)}</td>
                        </tr>
                    )
                })}
            </table>
            <FontAwesomeIcon className="backToHome" icon={faArrowLeftLong} onClick={onClickHome} />
        </StyledTable>
    )
}

export default RankingPage;

const StyledTable = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

    .backToHome {
        position: absolute;
        top: 5vw;
        left: 5vw;
        font-size: 1.5rem;
        cursor: pointer;
    }
    
	table {
		width: max-content;
		height: max-content;
		text-align: center;
		border: 2px solid #000;
	}
	th {
		background-color: rgb(38, 38, 38);
		color: #fff;
		text-decoration: solid;
		border-bottom: 2px solid #000;
		padding: .5rem;
	}
	tr {
		color: #000;
		background-color: transparent;
	}
    td {
        padding: .5rem;
    }
	th:nth-child(1) { //Rank
		width: max-content;
	}
	th:nth-child(2) { //Player
		width: 100px;
	}
	th:nth-child(3) {
		width: 100px;
	}
	th:nth-child(4) {
		width: 100px;
	}
`
