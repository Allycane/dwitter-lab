import React, { useState, useEffect } from 'react';
import { getFetchData } from '../util/fetchDatas.js';

export default function CompGet() {
    // fetch() / axios()로 서버 url포트 연결
    // 네트워크 연동을 통해 데이터를 가져와야 하기 떄문에 useEffect를 사용
    // Hook의 데이터를 저장하기 위한 useState
    const [list, setList] = useState([]);
    useEffect(() => {
        // fetch() 비동기 함수를 사용하기 위한 async / await를 적용하기 위한 함수 생성
        const loadData = async () => {
            const data = await getFetchData(`api/get`);
            
            setList(data.fruits); // fruits 배열만 넘어옴
        }
        // 화살표 함수는 호이스팅이 진행되지 않기 때문에 내부에서 호출
        loadData();
    }, []);

    // console.log(list);

    return (
        <div style={{width:"1000px", margin:"auto"}}>
            <h1>GET :: FRUIT LIST</h1>
            <table border="1" style={{width:"70%"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Emoji</th>
                    </tr>
                </thead>
                {/**서버에게 받은 데이터를 출력 */}
                <tbody>
                    {
                        list?.map((item, idx) => 
                            <tr key={idx} style={{textAlign:"center"}}>
                                <td style={{fontWeight:"bold"}}>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.emoji}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

