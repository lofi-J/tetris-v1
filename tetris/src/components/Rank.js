import { useEffect, useState } from "react";
import "../css/Rank.css";
import axios from "axios";


const RankingPage = () => {
    //DB 데이터 가져오기
    const fetchedDataFromDB = async () => {
        try {
            const res = await axios.get('/api/ranking');
            const data = res.data;

            console.log(data);
        }
        catch (error) {
            //오류 처리
            console.error(error);
        }
    }
    const [list, setList] = useState([]);
    useEffect(() => { setList(fetchedDataFromDB())}, []);
    console.log(list);
    return(
        <div id = "ranking-wrapper">
            <h1>Hall of Honor</h1>
            
            {!list ? <p>Loading...</p> :
            <ul id = "ranks">
                <li>{list}</li>
            </ul>}
            
        </div>
    );
} 

export default RankingPage;